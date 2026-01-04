import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { base44 } from "@/api/base44Client";
import MessageBubble from './MessageBubble';

export default function AgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !conversation) {
      initializeConversation();
    }
  }, [isOpen]);

  const initializeConversation = async () => {
    try {
      const newConversation = await base44.agents.createConversation({
        agent_name: "product_support",
        metadata: {
          name: "Product Inquiry",
          source: "landing_page"
        }
      });
      setConversation(newConversation);
      
      // Subscribe to updates
      base44.agents.subscribeToConversation(newConversation.id, (data) => {
        setMessages(data.messages);
      });
    } catch (error) {
      console.error('Failed to initialize conversation:', error);
    }
  };

  useEffect(() => {
    // Track input area height for mobile keyboard
    const updateHeight = () => {
      if (inputRef.current) {
        setInputHeight(inputRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !conversation || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    try {
      await base44.agents.addMessage(conversation, {
        role: "user",
        content: userMessage
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button - Mobile optimized */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileTap={{ scale: 0.95 }}
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white text-black active:bg-[#6C7A6F] active:text-white sm:hover:bg-[#6C7A6F] sm:hover:text-white shadow-2xl transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window - Mobile-first design */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full sm:w-[400px] h-[95dvh] sm:h-[600px] sm:max-h-[80vh] bg-[#111] border-t-2 sm:border-2 border-[#2A2A2A] sm:rounded-2xl rounded-t-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Pull indicator - mobile only */}
              <div className="sm:hidden flex justify-center pt-2 pb-1">
                <div className="w-10 h-1 bg-[#3A3A3A] rounded-full" />
              </div>

              {/* Header */}
              <div className="bg-[#0A0A0A] border-b border-[#2A2A2A] px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#6C7A6F]/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#6C7A6F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">BRKN Support</h3>
                    <p className="text-[#6C7A6F] text-xs">Online</p>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#2A2A2A] active:bg-[#3A3A3A] flex items-center justify-center transition-colors"
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.button>
              </div>

            {/* Messages - Mobile optimized */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 overscroll-contain">
              {messages.length === 0 && (
                <div className="text-center mt-8 px-4">
                  <div className="w-16 h-16 bg-[#6C7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#6C7A6F]" />
                  </div>
                  <p className="text-white font-semibold mb-2">Welcome to BRKN</p>
                  <p className="text-[#6A6A6A] text-sm">Ask me about sizing, materials, or the OPS/01 hoodie</p>
                </div>
              )}
              {messages.map((message, index) => (
                <MessageBubble key={index} message={message} />
              ))}
              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input - iOS/Android style */}
            <div 
              ref={inputRef}
              className="bg-[#0A0A0A] border-t border-[#2A2A2A] px-4 py-3 pb-safe"
              style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-4 py-2.5 flex items-center gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Message"
                    disabled={isLoading || !conversation}
                    className="bg-transparent border-0 text-white placeholder:text-[#6A6A6A] focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto text-[15px]"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading || !conversation}
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    inputValue.trim() && !isLoading && conversation
                      ? 'bg-[#6C7A6F] text-white'
                      : 'bg-[#2A2A2A] text-[#6A6A6A]'
                  }`}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
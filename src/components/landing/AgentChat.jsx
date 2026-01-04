import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
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
  const messagesEndRef = useRef(null);

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
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white text-black hover:bg-[#6C7A6F] hover:text-white shadow-2xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-[#111] border-2 border-[#2A2A2A] sm:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0A0A0A] border-b border-[#2A2A2A] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">BRKN Support</h3>
                <p className="text-[#6A6A6A] text-xs font-mono">OPS/01 Product Specialist</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2A2A2A] hover:bg-[#3A3A3A] flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-[#6A6A6A] text-sm mt-8">
                  <p className="mb-2">👋 Welcome to BRKN</p>
                  <p className="text-xs">Ask me anything about the Tactical Hoodie OPS/01</p>
                </div>
              )}
              {messages.map((message, index) => (
                <MessageBubble key={index} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="bg-[#0A0A0A] border-t border-[#2A2A2A] px-3 sm:px-4 py-3 sm:py-4 safe-area-inset-bottom">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about sizing, materials..."
                  disabled={isLoading || !conversation}
                  className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#6A6A6A] focus:border-[#6C7A6F] text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading || !conversation}
                  className="bg-white text-black hover:bg-[#6C7A6F] hover:text-white transition-colors flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
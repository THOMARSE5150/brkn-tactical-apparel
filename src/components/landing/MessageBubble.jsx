import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from "@/lib/utils";

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={cn("flex gap-2.5", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-[#6C7A6F]/20 flex items-center justify-center flex-shrink-0">
          <div className="h-2 w-2 rounded-full bg-[#6C7A6F]" />
        </div>
      )}
      <div className={cn("max-w-[80%] sm:max-w-[85%]", isUser && "flex flex-col items-end")}>
        <div className={cn(
          "rounded-[20px] px-4 py-2.5",
          isUser 
            ? "bg-[#6C7A6F] text-white rounded-tr-md" 
            : "bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-tl-md"
        )}>
          {isUser ? (
            <p className="text-[15px] leading-[1.4]">{message.content}</p>
          ) : (
            <ReactMarkdown 
              className="text-[15px] prose prose-sm prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              components={{
                p: ({ children }) => <p className="my-1.5 leading-[1.4]">{children}</p>,
                ul: ({ children }) => <ul className="my-1.5 ml-4 list-disc space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="my-1.5 ml-4 list-decimal space-y-1">{children}</ol>,
                li: ({ children }) => <li className="leading-[1.4]">{children}</li>,
                strong: ({ children }) => <strong className="text-[#6C7A6F] font-semibold">{children}</strong>,
                code: ({ inline, children }) => (
                  inline ? (
                    <code className="px-1.5 py-0.5 rounded-md bg-[#2A2A2A] text-[#6C7A6F] text-[13px] font-mono">
                      {children}
                    </code>
                  ) : (
                    <code className="block px-3 py-2 rounded-lg bg-[#2A2A2A] text-[#E6E6E6] text-[13px] my-2 font-mono">
                      {children}
                    </code>
                  )
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}
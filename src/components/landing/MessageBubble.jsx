import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from "@/lib/utils";

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="h-7 w-7 rounded-lg bg-[#6C7A6F]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
          <div className="h-1.5 w-1.5 rounded-full bg-[#6C7A6F]" />
        </div>
      )}
      <div className={cn("max-w-[85%]", isUser && "flex flex-col items-end")}>
        <div className={cn(
          "rounded-2xl px-4 py-2.5",
          isUser ? "bg-white text-black" : "bg-[#1A1A1A] border border-[#2A2A2A] text-white"
        )}>
          {isUser ? (
            <p className="text-sm leading-relaxed">{message.content}</p>
          ) : (
            <ReactMarkdown 
              className="text-sm prose prose-sm prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              components={{
                p: ({ children }) => <p className="my-1 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="my-1 ml-4 list-disc">{children}</ul>,
                ol: ({ children }) => <ol className="my-1 ml-4 list-decimal">{children}</ol>,
                li: ({ children }) => <li className="my-0.5">{children}</li>,
                strong: ({ children }) => <strong className="text-[#6C7A6F] font-semibold">{children}</strong>,
                code: ({ inline, children }) => (
                  inline ? (
                    <code className="px-1 py-0.5 rounded bg-[#2A2A2A] text-[#6C7A6F] text-xs">
                      {children}
                    </code>
                  ) : (
                    <code className="block px-3 py-2 rounded bg-[#2A2A2A] text-[#E6E6E6] text-xs my-2">
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
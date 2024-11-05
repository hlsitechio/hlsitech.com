import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { MessageType } from './types';

interface MessageListProps {
  messages: MessageType[];
  isDark: boolean;
  className?: string;
}

export const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  isDark,
  className = ''
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`overflow-y-auto p-4 space-y-4 ${className}`}>
      {messages.map((message) => (
        <Message key={message.id} message={message} isDark={isDark} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
import React from 'react';
import { MessageType } from './types';

interface MessageProps {
  message: MessageType;
  isDark: boolean;
}

export const Message: React.FC<MessageProps> = ({ message, isDark }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${
        message.sender === 'user'
          ? `bg-blue-600 text-white rounded-l-lg rounded-tr-lg`
          : `${isDark ? 'bg-gray-700' : 'bg-gray-100'} 
             ${isDark ? 'text-white' : 'text-gray-800'} 
             rounded-r-lg rounded-tl-lg`
      } p-3`}>
        <p className="text-sm">{message.text}</p>
        <p className={`text-xs mt-1 ${
          message.sender === 'user' 
            ? 'text-blue-100' 
            : isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Translation } from '../../config/i18n';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isDark: boolean;
  t: Translation;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isDark, t }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    onSendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div className={`p-4 border-t ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-100'
    }`}>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder={t.chat.messagePlaceholder}
          className={`flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
            isDark 
              ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50' 
              : 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-500'
          }`}
        />
        <button
          onClick={handleSend}
          className={`p-2 rounded-lg ${
            isDark 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
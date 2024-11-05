import React from 'react';
import { ChatHeader } from './chat/ChatHeader';
import { MessageList } from './chat/MessageList';
import { MessageInput } from './chat/MessageInput';
import { NameInput } from './chat/NameInput';
import { AdminLogin } from './chat/AdminLogin';
import { useChatState } from './chat/useChatState';
import { Translation } from '../config/i18n';

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  isEmbedded?: boolean;
  t: Translation;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  isOpen, 
  onClose, 
  isDark,
  isEmbedded = false,
  t
}) => {
  const { state, addMessage, setUserName, setAdminMode } = useChatState(t);

  if (!isOpen) return null;

  const handleSendMessage = (text: string) => {
    addMessage(text, state.isAdmin ? 'agent' : 'user');
  };

  const chatContent = (
    <>
      <ChatHeader
        onClose={onClose}
        isDark={isDark}
        isEmbedded={isEmbedded}
        isAdmin={state.isAdmin}
        t={t}
      />
      {!state.userName && !state.isAdmin ? (
        <NameInput
          onSubmit={setUserName}
          isDark={isDark}
          t={t}
        />
      ) : !state.userName && state.isAdmin ? (
        <AdminLogin
          onLogin={setAdminMode}
          isDark={isDark}
          t={t}
        />
      ) : (
        <>
          <MessageList
            messages={state.messages}
            isDark={isDark}
            className="flex-1"
          />
          <MessageInput
            onSendMessage={handleSendMessage}
            isDark={isDark}
            t={t}
          />
        </>
      )}
    </>
  );

  if (isEmbedded) {
    return (
      <div className="flex flex-col h-[600px]">
        {chatContent}
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96">
      <div className={`rounded-lg shadow-xl overflow-hidden ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        {chatContent}
      </div>
    </div>
  );
};
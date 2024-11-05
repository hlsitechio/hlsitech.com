import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MessageType, ChatState } from './types';
import { Translation } from '../../config/i18n';

export const useChatState = (t: Translation) => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    userName: null,
    chatLanguage: null,
    isAdmin: false
  });

  const setUserName = async (name: string, chatLanguage: 'fr' | 'en') => {
    try {
      await emailjs.send(
        'service_w523fo9',
        'template_oxo5oyw',
        {
          user_name: name,
          date: new Date().toLocaleString()
        },
        'AdrLQxBNJX5QgN1ZX'
      );
    } catch (error) {
      console.error('Failed to send email notification:', error);
    }

    setState(prev => ({
      ...prev,
      userName: name,
      chatLanguage,
      messages: [{
        id: '1',
        text: t.chat.initialGreeting.replace('{name}', name),
        sender: 'agent',
        timestamp: new Date()
      }]
    }));
  };

  const setAdminMode = () => {
    setState(prev => ({
      ...prev,
      isAdmin: true
    }));
  };

  const addMessage = (text: string, sender: 'user' | 'agent') => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));

    if (sender === 'user' && !state.isAdmin) {
      simulateAgentResponse();
    }
  };

  const simulateAgentResponse = () => {
    setTimeout(() => {
      addMessage(t.chat.defaultResponse, 'agent');
    }, 1000);
  };

  return {
    state,
    addMessage,
    setUserName,
    setAdminMode
  };
};
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageType, ChatState } from "./types";
import { Translation } from "../../config/i18n";

export const useChatState = (t: Translation) => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    userName: null,
    chatLanguage: null,
    isAdmin: false,
  });

  const setUserName = async (name: string, chatLanguage: "fr" | "en") => {
    try {
      // Use environment variables for sensitive information
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_w523fo9";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_oxo5oyw";
      const userId =
        import.meta.env.VITE_EMAILJS_USER_ID || "AdrLQxBNJX5QgN1ZX";

      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: name,
          date: new Date().toLocaleString(),
        },
        userId,
      );
    } catch (error) {
      console.error("Failed to send email notification:", error);
    }

    setState((prev) => ({
      ...prev,
      userName: name,
      chatLanguage,
      messages: [
        {
          id: "1",
          text: t.chat.initialGreeting.replace("{name}", name),
          sender: "agent",
          timestamp: new Date(),
        },
      ],
    }));
  };

  const setAdminMode = () => {
    setState((prev) => ({
      ...prev,
      isAdmin: true,
    }));
  };

  const addMessage = (text: string, sender: "user" | "agent") => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    if (sender === "user" && !state.isAdmin) {
      simulateAgentResponse();
    }
  };

  const simulateAgentResponse = () => {
    setTimeout(() => {
      addMessage(t.chat.defaultResponse, "agent");
    }, 1000);
  };

  return {
    state,
    addMessage,
    setUserName,
    setAdminMode,
  };
};

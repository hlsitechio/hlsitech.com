import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Translation } from "../../config/i18n";
import { ButtonRipple } from "../ui/ButtonRipple";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isDark: boolean;
  t: Translation;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isDark,
  t,
}) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    onSendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <div
      className={`p-4 border-t ${
        isDark ? "border-gray-700 bg-gray-800" : "border-gray-100"
      }`}
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder={t.chat.messagePlaceholder}
          className={`flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            isDark
              ? "bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50 focus:shadow-glow"
              : "bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-500 focus:shadow-glow"
          }`}
        />
        <ButtonRipple
          onClick={handleSend}
          className={`p-2 rounded-lg ${
            isDark
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95`}
        >
          <IoSend
            size={20}
            className="text-blue-200 transition-transform duration-300 hover:translate-x-1"
          />
        </ButtonRipple>
      </div>
    </div>
  );
};

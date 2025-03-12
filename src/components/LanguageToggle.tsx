import React from "react";
import { IoLanguage } from "react-icons/io5";

interface LanguageToggleProps {
  language: "fr" | "en";
  onToggle: () => void;
  isDark: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onToggle,
  isDark,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full shadow-lg transition-all duration-300 flex items-center gap-1 hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-gray-800/80 hover:bg-gray-800/90 text-gray-100 hover:shadow-glow"
          : "bg-white/80 hover:bg-white/90 text-gray-600 hover:shadow-glow"
      }`}
      title={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <IoLanguage
        size={20}
        className="text-cyan-400 transition-transform duration-300 hover:rotate-12"
      />
      <span className="text-sm font-medium transition-all duration-300 hover:font-bold">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

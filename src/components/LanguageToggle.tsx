import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: 'fr' | 'en';
  onToggle: () => void;
  isDark: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle, isDark }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full shadow-lg transition-colors flex items-center gap-1 ${
        isDark 
          ? 'bg-gray-800/80 hover:bg-gray-800/90 text-gray-100' 
          : 'bg-white/80 hover:bg-white/90 text-gray-600'
      }`}
      title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Languages size={20} />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
};
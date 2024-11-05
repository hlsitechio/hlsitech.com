import React, { useState } from 'react';
import { Translation } from '../../config/i18n';

interface NameInputProps {
  onSubmit: (name: string, chatLanguage: 'fr' | 'en') => void;
  isDark: boolean;
  t: Translation;
}

export const NameInput: React.FC<NameInputProps> = ({ onSubmit, isDark, t }) => {
  const [name, setName] = useState('');
  const [chatLanguage, setChatLanguage] = useState<'fr' | 'en'>('fr');
  const MAX_NAME_LENGTH = 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && name.length <= MAX_NAME_LENGTH) {
      onSubmit(name.trim(), chatLanguage);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_NAME_LENGTH) {
      setName(value);
    }
  };

  const isNameValid = name.trim() && name.length <= MAX_NAME_LENGTH;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <h3 className={`text-lg font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}>
        {t.chat.enterName}
      </h3>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="relative mb-3">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder={t.chat.namePlaceholder}
            maxLength={MAX_NAME_LENGTH}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50' 
                : 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-500'
            }`}
          />
          <div className={`absolute right-2 top-2 text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {name.length}/{MAX_NAME_LENGTH}
          </div>
        </div>

        <div className="mb-3">
          <p className={`text-sm mb-2 ${isDark ? 'text-white' : 'text-gray-700'}`}>
            {t.chat.chooseLanguage}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setChatLanguage('fr')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                chatLanguage === 'fr'
                  ? 'bg-blue-600 text-white'
                  : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.chat.french}
            </button>
            <button
              type="button"
              onClick={() => setChatLanguage('en')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                chatLanguage === 'en'
                  ? 'bg-blue-600 text-white'
                  : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.chat.english}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isNameValid}
          className={`w-full py-2 rounded-lg mb-3 ${
            isNameValid
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-400 cursor-not-allowed text-gray-200'
          } transition-colors`}
        >
          {t.chat.startChat}
        </button>
        <p className={`text-xs text-center ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {t.chat.privacyNotice}
        </p>
      </form>
    </div>
  );
};
import React from 'react';
import { Languages, ArrowLeft, Sun, Moon } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
  language: 'fr' | 'en';
  toggleLanguage: () => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  language,
  toggleLanguage,
  isDark,
  setIsDark
}) => {
  const handleBack = () => {
    window.location.href = '/';
  };

  const buttonBaseClass = "flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors";
  const buttonClass = `${buttonBaseClass} ${
    isDark 
      ? 'text-gray-300 hover:bg-gray-700' 
      : 'text-gray-600 hover:bg-gray-100'
  }`;

  return (
    <div 
      className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
      data-theme={isDark ? 'dark' : 'light'}
    >
      <header 
        className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
        role="banner"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className={buttonClass}
            aria-label="Return to homepage"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={buttonClass}
              aria-label={`Switch language to ${language === 'fr' ? 'English' : 'French'}`}
            >
              <Languages size={18} aria-hidden="true" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`${buttonClass} ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <Sun size={18} aria-hidden="true" />
              ) : (
                <Moon size={18} aria-hidden="true" />
              )}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </header>

      <main 
        className="max-w-4xl mx-auto p-4"
        role="main"
      >
        {children}
      </main>
    </div>
  );
};
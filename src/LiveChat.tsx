import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import { ChatInterface } from './components/ChatInterface';
import { Languages, ArrowLeft } from 'lucide-react';

export function LiveChat() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className={`min-h-screen ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <header className={`p-4 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } shadow-sm`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
              isDark 
                ? 'text-gray-300 hover:bg-gray-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Languages size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <div className={`rounded-2xl shadow-lg overflow-hidden ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <ChatInterface
            isOpen={true}
            onClose={() => {}}
            isDark={isDark}
            isEmbedded={true}
            t={t}
          />
        </div>
      </main>
    </div>
  );
}

export default LiveChat;
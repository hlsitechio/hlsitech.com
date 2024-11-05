import { useLanguage } from '../../hooks/useLanguage';
import { ChatInterface } from '../../components/ChatInterface';
import { PageLayout } from './components/PageLayout';

export function LiveChat() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  return (
    <PageLayout
      language={language}
      toggleLanguage={toggleLanguage}
      isDark={isDark}
      setIsDark={setIsDark}
    >
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
    </PageLayout>
  );
}

export default LiveChat;
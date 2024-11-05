import { useState } from 'react';
import { ContactButtons } from './ContactButtons';
import { ProfileHeader } from './ProfileHeader';
import { SocialLinks } from './SocialLinks';
import { ShareButtons } from './ShareButtons';
import { QRCode } from './QRCode';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { ChatInterface } from './ChatInterface';
import { useLanguage } from '../hooks/useLanguage';
import { config } from '../config';

export const ContactCard: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const { language, toggleLanguage, isTransitioning, direction, t } = useLanguage();
  const [showQR, setShowQR] = useState(false);
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <div className={`max-w-md w-full mx-auto overflow-hidden rounded-2xl border-2 ${
        isDark 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700' 
          : 'bg-gradient-to-b from-blue-50/50 to-white border-black'
      }`}>
        <ChatInterface
          isOpen={true}
          onClose={() => setShowChat(false)}
          isDark={isDark}
          isEmbedded={true}
          t={t}
        />
      </div>
    );
  }

  return (
    <div className={`max-w-md w-full mx-auto overflow-hidden rounded-2xl border-2 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700' 
        : 'bg-gradient-to-b from-blue-50/50 to-white border-black'
    }`}>
      <div className="relative">
        <ProfileHeader
          profileImage={config.images.profile}
          backgroundImage={config.images.background}
          name={t.name}
          title={t.title}
          tagline={t.tagline}
          skills={config.skills}
          bio={t.bio}
          isDark={isDark}
          t={t}
          isTransitioning={isTransitioning}
          direction={direction}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <LanguageToggle 
            language={language}
            onToggle={toggleLanguage}
            isDark={isDark}
          />
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>
      </div>
      
      <div className="p-8">
        <ContactButtons 
          email={config.email} 
          phone={config.phone}
          t={t}
          isTransitioning={isTransitioning}
        />
        
        <SocialLinks 
          links={config.social}
          isDark={isDark}
          t={t}
          isTransitioning={isTransitioning}
          onChatOpen={() => setShowChat(true)}
        />
        
        <ShareButtons 
          name={t.name}
          title={t.title}
          onShowQR={() => setShowQR(true)}
          isDark={isDark}
          t={t}
          isTransitioning={isTransitioning}
        />
      </div>

      <QRCode 
        isOpen={showQR}
        onClose={() => setShowQR(false)}
        profile={config}
        isDark={isDark}
        t={t}
      />
    </div>
  );
};
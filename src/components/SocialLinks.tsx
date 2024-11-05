import React from 'react';
import { Linkedin, MessageCircle } from 'lucide-react';
import { Translation } from '../config/i18n';

interface SocialLinksProps {
  links: {
    linkedin?: string;
  };
  isDark: boolean;
  t: Translation;
  isTransitioning: boolean;
  onChatOpen: () => void;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  links, 
  isDark, 
  t, 
  isTransitioning
}) => {
  const handleLinkedIn = () => {
    if (!links.linkedin) {
      console.error('LinkedIn URL is not configured');
      return;
    }
    window.open(`https://${links.linkedin}`, '_blank', 'noopener,noreferrer');
  };

  const handleChat = () => {
    window.open('https://hlsitech.com/livechat', '_blank', 'noopener,noreferrer');
  };

  const textTransitionClass = `transition-[filter] duration-150 ${
    isTransitioning ? 'blur-sm' : 'blur-0'
  }`;

  const buttonBaseClass = "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors";

  return (
    <div className="flex gap-2 mb-6" role="group" aria-label="Social links">
      <button
        onClick={handleLinkedIn}
        className={buttonBaseClass}
        aria-label="Visit LinkedIn profile"
        disabled={!links.linkedin}
      >
        <Linkedin size={18} aria-hidden="true" />
        <span className={textTransitionClass}>{t.buttons.linkedin}</span>
      </button>
      <button
        onClick={handleChat}
        className={`${buttonBaseClass} relative`}
        aria-label="Open live chat"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span className={textTransitionClass}>{t.buttons.liveChat}</span>
        <div className="absolute -top-1 -right-1 flex items-center">
          <div 
            className="w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white"
            role="status"
            aria-label={t.status.online}
          />
        </div>
      </button>
    </div>
  );
};
import React from "react";
import { Translation } from "../config/i18n";
import { FaLinkedin } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { ButtonRipple } from "./ui/ButtonRipple";

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
  isTransitioning,
  onChatOpen,
}) => {
  const handleLinkedIn = () => {
    if (!links.linkedin) {
      console.error("LinkedIn URL is not configured");
      return;
    }
    window.open(`https://${links.linkedin}`, "_blank", "noopener,noreferrer");
  };

  const handleChat = () => {
    onChatOpen();
  };

  const textTransitionClass = `transition-[filter] duration-150 ${
    isTransitioning ? "blur-sm" : "blur-0"
  }`;

  const buttonBaseClass =
    "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-glow hover:scale-102 active:scale-95";

  return (
    <div className="flex gap-2 mb-6" role="group" aria-label="Social links">
      <ButtonRipple
        onClick={handleLinkedIn}
        className={buttonBaseClass}
        disabled={!links.linkedin}
      >
        <FaLinkedin
          size={18}
          className="text-blue-300 transition-transform duration-300 hover:rotate-12"
          aria-hidden="true"
        />
        <span className={textTransitionClass}>{t.buttons.linkedin}</span>
      </ButtonRipple>

      <ButtonRipple
        onClick={handleChat}
        className={`${buttonBaseClass} relative group`}
      >
        <BsChatDotsFill
          size={18}
          className="text-green-300 group-hover:animate-bounce"
          aria-hidden="true"
        />
        <span className={textTransitionClass}>{t.buttons.liveChat}</span>
        <div className="absolute -top-1 -right-1 flex items-center">
          <div
            className="w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white animate-pulse"
            role="status"
            aria-label={t.status.online}
          />
        </div>
      </ButtonRipple>
    </div>
  );
};

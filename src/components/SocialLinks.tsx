import React from "react";
import { Translation } from "../config/i18n";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
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

  const handleGoogleMeet = () => {
    window.open(
      "https://chat.google.com/room/AAAAE2Ji8To?cls=7",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const textTransitionClass = `transition-[filter] duration-150 ${
    isTransitioning ? "blur-sm" : "blur-0"
  }`;

  const buttonBaseClass =
    "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-glow hover:scale-102 active:scale-95";

  // This component is no longer used as the buttons have been moved to ContactButtons
  return null;
};

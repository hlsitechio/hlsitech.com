import React from "react";
import { Translation } from "../config/i18n";
import { FaGoogle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ButtonRipple } from "./ui/ButtonRipple";

interface ContactButtonsProps {
  email: string;
  phone: string;
  t: Translation;
  isTransitioning: boolean;
  onGoogleMeetClick: () => void;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({
  email,
  phone,
  t,
  isTransitioning,
  onGoogleMeetClick,
}) => {
  const handleGmail = () => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };

  const handleOutlook = () => {
    window.location.href = `https://outlook.office.com/mail/deeplink/compose?to=${email}`;
  };

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const textTransitionClass = `transition-[filter] duration-150 ${
    isTransitioning ? "blur-sm" : "blur-0"
  }`;

  const buttonBaseClass =
    "flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-glow hover:scale-102 active:scale-95";

  return (
    <div className="flex flex-col gap-2 mb-2">
      <div className="grid grid-cols-2 gap-2">
        <ButtonRipple onClick={handleGmail} className={buttonBaseClass}>
          <FaGoogle
            size={18}
            className="text-red-500 group-hover:animate-bounce"
          />
          <span className={textTransitionClass}>{t.buttons.gmail}</span>
        </ButtonRipple>

        <ButtonRipple
          onClick={onGoogleMeetClick}
          className={`${buttonBaseClass} relative group`}
        >
          <FaGoogle
            size={18}
            className="text-red-300 group-hover:animate-bounce"
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

      <div className="grid grid-cols-3 gap-2">
        <ButtonRipple onClick={handleCall} className={buttonBaseClass}>
          <FaPhoneAlt
            size={18}
            className="text-green-400 group-hover:animate-wiggle"
          />
          <span className={textTransitionClass}>{t.buttons.call}</span>
        </ButtonRipple>

        <ButtonRipple onClick={handleOutlook} className={buttonBaseClass}>
          <FaEnvelope
            size={18}
            className="text-blue-300 group-hover:animate-bounce"
          />
          <span className={textTransitionClass}>{t.buttons.outlook}</span>
        </ButtonRipple>

        <ButtonRipple
          className={buttonBaseClass}
          onClick={() => {
            window.open(
              `https://${t.buttons.linkedin === "LinkedIn" ? "linkedin.com/in/hubertls/" : "linkedin.com/in/hubertls/"}`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-300 transition-transform duration-300 hover:rotate-12"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span className={textTransitionClass}>{t.buttons.linkedin}</span>
        </ButtonRipple>
      </div>
    </div>
  );
};

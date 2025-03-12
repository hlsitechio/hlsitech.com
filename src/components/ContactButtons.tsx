import React from "react";
import { Translation } from "../config/i18n";
import { FaGoogle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ButtonRipple } from "./ui/ButtonRipple";

interface ContactButtonsProps {
  email: string;
  phone: string;
  t: Translation;
  isTransitioning: boolean;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({
  email,
  phone,
  t,
  isTransitioning,
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
    <div className="grid grid-cols-3 gap-2 mb-2">
      <ButtonRipple onClick={handleGmail} className={buttonBaseClass}>
        <FaGoogle
          size={18}
          className="text-red-500 group-hover:animate-bounce"
        />
        <span className={textTransitionClass}>{t.buttons.gmail}</span>
      </ButtonRipple>

      <ButtonRipple onClick={handleOutlook} className={buttonBaseClass}>
        <FaEnvelope
          size={18}
          className="text-blue-300 group-hover:animate-bounce"
        />
        <span className={textTransitionClass}>{t.buttons.outlook}</span>
      </ButtonRipple>

      <ButtonRipple onClick={handleCall} className={buttonBaseClass}>
        <FaPhoneAlt
          size={18}
          className="text-green-400 group-hover:animate-wiggle"
        />
        <span className={textTransitionClass}>{t.buttons.call}</span>
      </ButtonRipple>
    </div>
  );
};

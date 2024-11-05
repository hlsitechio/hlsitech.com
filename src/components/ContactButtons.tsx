import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Translation } from '../config/i18n';

interface ContactButtonsProps {
  email: string;
  phone: string;
  t: Translation;
  isTransitioning: boolean;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({ email, phone, t, isTransitioning }) => {
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
    isTransitioning ? 'blur-sm' : 'blur-0'
  }`;

  return (
    <div className="grid grid-cols-3 gap-2 mb-2">
      <button
        onClick={handleGmail}
        className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Mail size={18} />
        <span className={textTransitionClass}>{t.buttons.gmail}</span>
      </button>
      <button
        onClick={handleOutlook}
        className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Mail size={18} />
        <span className={textTransitionClass}>{t.buttons.outlook}</span>
      </button>
      <button
        onClick={handleCall}
        className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Phone size={18} />
        <span className={textTransitionClass}>{t.buttons.call}</span>
      </button>
    </div>
  );
};
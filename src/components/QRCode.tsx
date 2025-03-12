import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Translation } from "../config/i18n";

interface QRCodeProps {
  isOpen: boolean;
  onClose: () => void;
  profile: any;
  isDark: boolean;
  t: Translation;
}

export const QRCode: React.FC<QRCodeProps> = ({
  isOpen,
  onClose,
  profile,
  isDark,
  t,
}) => {
  if (!isOpen) return null;

  const qrData = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
TITLE:${profile.title}
TEL:${profile.phone}
EMAIL:${profile.email}
URL:${profile.social.linkedin}
END:VCARD`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`p-6 rounded-2xl max-w-sm w-full mx-4 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`text-lg font-semibold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {t.buttons.qrTitle}
          </h3>
          <button
            onClick={onClose}
            className={`p-1 rounded-full transition-colors ${
              isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <IoCloseCircle
              size={22}
              className={isDark ? "text-red-300" : "text-red-500"}
            />
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
        </div>
        <p
          className={`text-sm text-center ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t.buttons.qrDescription}
        </p>
      </div>
    </div>
  );
};

import React from "react";
import { Translation } from "../config/i18n";
import { FaDownload, FaQrcode, FaShareAlt } from "react-icons/fa";

interface ShareButtonsProps {
  name: string;
  title: string;
  onShowQR: () => void;
  isDark: boolean;
  t: Translation;
  isTransitioning: boolean;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  name,
  title,
  onShowQR,
  isDark,
  t,
  isTransitioning,
}) => {
  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${title}
TEL:514.371.8022
EMAIL:hlarosesurprenant@gmail.com
URL:https://linkedin.com/in/hubertls/
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${name.replace(/\s+/g, "-")}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: name,
      text: `${name} - ${title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const textTransitionClass = `transition-[filter] duration-150 ${
    isTransitioning ? "blur-sm" : "blur-0"
  }`;

  const buttonClass =
    "flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95";

  return (
    <div>
      <p
        className={`text-center text-sm text-gray-500 mb-3 ${textTransitionClass}`}
      >
        {t.buttons.save}
      </p>
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleDownloadVCard}
          className={`${buttonClass} group`}
        >
          <FaDownload
            size={20}
            className="text-blue-400 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[1px]"
          />
          <span className={`text-xs ${textTransitionClass}`}>
            {t.buttons.vcard}
          </span>
          <span className={`text-[10px] text-gray-400 ${textTransitionClass}`}>
            {t.buttons.contacts}
          </span>
        </button>
        <button onClick={onShowQR} className={`${buttonClass} group`}>
          <FaQrcode
            size={20}
            className="text-purple-400 transition-transform duration-300 group-hover:scale-110"
          />
          <span className={`text-xs ${textTransitionClass}`}>
            {t.buttons.qrcode}
          </span>
          <span
            className={`text-[10px] text-gray-400 whitespace-pre-line ${textTransitionClass}`}
          >
            {t.buttons.scan}
          </span>
        </button>
        <button onClick={handleShare} className={`${buttonClass} group`}>
          <FaShareAlt
            size={20}
            className="text-green-400 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className={`text-xs ${textTransitionClass}`}>
            {t.buttons.share}
          </span>
          <span className={`text-[10px] text-gray-400 ${textTransitionClass}`}>
            {t.buttons.sendLink}
          </span>
        </button>
      </div>
    </div>
  );
};

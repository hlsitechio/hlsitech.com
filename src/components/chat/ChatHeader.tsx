import React from 'react';
import { X, ArrowLeft, Lock } from 'lucide-react';
import { Translation } from '../../config/i18n';

interface ChatHeaderProps {
  onClose: () => void;
  isDark: boolean;
  isEmbedded?: boolean;
  isAdmin?: boolean;
  t: Translation;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  onClose, 
  isDark,
  isEmbedded = false,
  isAdmin = false,
  t
}) => {
  return (
    <div className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-blue-600'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isEmbedded && (
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold">{t.chat.title}</h3>
            {isAdmin && (
              <div className="flex items-center gap-1">
                <Lock size={14} className="text-white/90" />
                <span className="text-xs text-white/90">{t.chat.adminMode}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs text-white/90">{t.status.online}</span>
            </div>
          </div>
        </div>
        {!isEmbedded && (
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
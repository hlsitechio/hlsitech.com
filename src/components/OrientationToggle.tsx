import React from "react";
import { MdScreenRotation } from "react-icons/md";

interface OrientationToggleProps {
  isLandscape: boolean;
  onToggle: () => void;
  isDark: boolean;
}

export const OrientationToggle: React.FC<OrientationToggleProps> = ({
  isLandscape,
  onToggle,
  isDark,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-gray-800/80 hover:bg-gray-800/90 hover:shadow-glow"
          : "bg-white/80 hover:bg-white/90 hover:shadow-glow"
      }`}
      title={
        isLandscape ? "Switch to portrait mode" : "Switch to landscape mode"
      }
    >
      <MdScreenRotation
        size={20}
        className={`text-orange-400 transition-transform duration-300 ${isLandscape ? "rotate-90" : "rotate-0"}`}
      />
    </button>
  );
};

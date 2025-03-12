import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDark,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-gray-800/80 hover:bg-gray-800/90 hover:shadow-glow"
          : "bg-white/80 hover:bg-white/90 hover:shadow-glow"
      }`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <FaSun
          size={20}
          className="text-yellow-300 transition-transform duration-500 hover:rotate-45"
        />
      ) : (
        <FaMoon
          size={20}
          className="text-indigo-400 transition-transform duration-500 hover:rotate-12"
        />
      )}
    </button>
  );
};

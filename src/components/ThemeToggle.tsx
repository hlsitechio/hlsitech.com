import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full shadow-lg transition-colors ${
        isDark 
          ? 'bg-gray-800/80 hover:bg-gray-800/90' 
          : 'bg-white/80 hover:bg-white/90'
      }`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} className="text-gray-100" /> : <Moon size={20} className="text-gray-600" />}
    </button>
  );
};
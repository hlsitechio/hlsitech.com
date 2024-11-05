import { useState, useCallback, useEffect } from 'react';
import { translations, Translation } from '../config/i18n';

export const useLanguage = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const toggleLanguage = useCallback(() => {
    setIsTransitioning(true);
    setDirection(prev => prev === 'up' ? 'down' : 'up');
    setTimeout(() => {
      setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    }, 400); // Increased duration for smoother transition
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Match the duration above
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return {
    language,
    toggleLanguage,
    isTransitioning,
    direction,
    t: translations[language]
  };
};
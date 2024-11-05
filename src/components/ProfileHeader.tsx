import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { Translation } from '../config/i18n';
import { TransitionText } from './TransitionText';

interface ProfileHeaderProps {
  profileImage: string;
  backgroundImage: string;
  name: string;
  title: string;
  tagline: string;
  skills: string[];
  bio: string;
  isDark: boolean;
  t: Translation;
  isTransitioning: boolean;
  direction: 'up' | 'down';
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage,
  backgroundImage,
  name,
  title,
  tagline,
  skills,
  bio,
  isDark,
  t,
  isTransitioning,
  direction
}) => {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="h-48">
        <img
          src={backgroundImage}
          alt="Profile Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative px-6 pb-4">
        <div className="flex flex-col items-center -mt-16">
          <div className="relative mb-4">
            <img
              src={profileImage}
              alt={name}
              className={`w-32 h-32 rounded-full border-4 shadow-lg object-cover ${
                isDark ? 'border-gray-800' : 'border-white'
              }`}
            />
            <div 
              className={`absolute -right-1 -bottom-1 bg-blue-600 rounded-full p-2 border-2 shadow-md ${
                isDark ? 'border-gray-800' : 'border-white'
              }`}
              title={t.buttons.available}
            >
              <Briefcase size={16} className="text-white" />
            </div>
          </div>

          <div className="text-center">
            <h1 className={`text-2xl font-bold mb-1 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              <TransitionText isTransitioning={isTransitioning} direction={direction}>
                {name}
              </TransitionText>
            </h1>
            <p className={`font-semibold mb-2 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <TransitionText isTransitioning={isTransitioning} direction={direction} delay={50}>
                {title}
              </TransitionText>
            </p>
            <div className={`text-sm mb-2 space-y-1 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {bio.split('\n').map((line, index) => (
                <p key={index}>
                  <TransitionText 
                    isTransitioning={isTransitioning} 
                    direction={direction}
                    delay={100 + index * 50}
                  >
                    {line}
                  </TransitionText>
                </p>
              ))}
            </div>
            
            <button
              onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
              className={`mt-3 flex items-center justify-center gap-1 text-sm mx-auto px-3 py-1.5 rounded-full transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <TransitionText 
                isTransitioning={isTransitioning} 
                direction={direction}
                delay={200}
              >
                {t.buttons.skills}
              </TransitionText>
              {isSkillsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isSkillsExpanded 
                  ? 'max-h-96 opacity-100 mt-3' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-wrap justify-center gap-2 px-4">
                {skills.map((skill, index) => (
                  <TransitionText 
                    key={skill}
                    isTransitioning={isTransitioning} 
                    direction={direction}
                    delay={250 + index * 25}
                  >
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${
                      isDark 
                        ? 'bg-blue-900/50 text-blue-300 border-blue-800' 
                        : 'bg-blue-50 text-blue-600 border-blue-100'
                    }`}>
                      {skill}
                    </span>
                  </TransitionText>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
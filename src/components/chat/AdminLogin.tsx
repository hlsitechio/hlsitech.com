import React, { useState } from 'react';
import { Translation } from '../../config/i18n';

interface AdminLoginProps {
  onLogin: () => void;
  isDark: boolean;
  t: Translation;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, isDark, t }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'hlarosesurprenant@gmail.com' && password === 'Wintersun6?6') {
      onLogin();
      setError('');
    } else {
      setError(t.chat.invalidCredentials);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <h3 className={`text-lg font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}>
        {t.chat.adminLogin}
      </h3>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.chat.emailPlaceholder}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50' 
                : 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-500'
            }`}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.chat.passwordPlaceholder}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50' 
                : 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-500'
            }`}
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          {t.chat.loginButton}
        </button>
      </form>
    </div>
  );
};
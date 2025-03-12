export interface Translation {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  buttons: {
    skills: string;
    gmail: string;
    outlook: string;
    call: string;
    linkedin: string;
    liveChat: string;
    save: string;
    vcard: string;
    contacts: string;
    qrcode: string;
    scan: string;
    share: string;
    sendLink: string;
  };
  status: {
    online: string;
  };
  chat: {
    title: string;
    enterName: string;
    namePlaceholder: string;
    startChat: string;
    privacyNotice: string;
    messagePlaceholder: string;
    initialGreeting: string;
    defaultResponse: string;
    chooseLanguage: string;
    french: string;
    english: string;
    adminLogin: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    loginButton: string;
    invalidCredentials: string;
    adminMode: string;
  };
}

export const translations: Record<"fr" | "en", Translation> = {
  fr: {
    name: "Hubert Larose-Surprenant",
    title: "Technicien Informatique",
    tagline: "Technicien Informatique",
    bio: "Rive-Sud, Montréal",
    buttons: {
      skills: "Compétences techniques",
      gmail: "Gmail",
      outlook: "Outlook",
      call: "Appeler",
      linkedin: "LinkedIn",
      liveChat: "Google Meet",
      save: "Sauvegarder mes coordonnées",
      vcard: "vCard",
      contacts: "Pour contacts",
      qrcode: "Code QR",
      scan: "Scanner &\nsauvegarder",
      share: "Partager",
      sendLink: "Envoyer le lien",
    },
    status: {
      online: "En ligne",
    },
    chat: {
      title: "Chat en direct",
      enterName: "Entrez votre nom pour commencer",
      namePlaceholder: "Votre nom",
      startChat: "Commencer le chat",
      privacyNotice:
        "Votre confidentialité est importante ! Nous ne stockons aucun historique de chat ni information personnelle. Toutes les données sont effacées à la fermeture du chat.",
      messagePlaceholder: "Tapez votre message...",
      initialGreeting:
        "Bonjour {name} ! Comment puis-je vous aider aujourd'hui ?",
      defaultResponse: "Merci pour votre message ! Je vous répondrai sous peu.",
      chooseLanguage: "Choisissez votre langue de chat :",
      french: "Français",
      english: "Anglais",
      adminLogin: "Connexion administrateur",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Mot de passe",
      loginButton: "Se connecter",
      invalidCredentials: "Email ou mot de passe invalide",
      adminMode: "Mode administrateur",
    },
  },
  en: {
    name: "Hubert Larose-Surprenant",
    title: "IT Technician",
    tagline: "IT Technician",
    bio: "South Shore, Montreal",
    buttons: {
      skills: "Technical Skills",
      gmail: "Gmail",
      outlook: "Outlook",
      call: "Call",
      linkedin: "LinkedIn",
      liveChat: "Google Meet",
      save: "Save my contact information",
      vcard: "vCard",
      contacts: "For contacts",
      qrcode: "QR Code",
      scan: "Scan &\nsave",
      share: "Share",
      sendLink: "Send link",
    },
    status: {
      online: "Online",
    },
    chat: {
      title: "Live Chat",
      enterName: "Enter your name to start chatting",
      namePlaceholder: "Your name",
      startChat: "Start Chat",
      privacyNotice:
        "Your privacy matters! We don't store any chat history or personal information. All data is cleared when you close the chat.",
      messagePlaceholder: "Type your message...",
      initialGreeting: "Hello {name}! How can I help you today?",
      defaultResponse: "Thanks for your message! I'll get back to you shortly.",
      chooseLanguage: "Choose your chat language:",
      french: "French",
      english: "English",
      adminLogin: "Admin Login",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      loginButton: "Login",
      invalidCredentials: "Invalid email or password",
      adminMode: "Admin Mode",
    },
  },
};

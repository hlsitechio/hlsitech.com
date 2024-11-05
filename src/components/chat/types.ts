export interface MessageType {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export interface ChatState {
  messages: MessageType[];
  userName: string | null;
  chatLanguage: 'fr' | 'en' | null;
  isAdmin: boolean;
}
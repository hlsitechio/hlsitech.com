import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LiveChat from '../pages/LiveChat';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/livechat',
    element: <LiveChat />
  }
]);
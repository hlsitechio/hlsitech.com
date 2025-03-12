import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LiveChat from "../pages/LiveChat";
import routes from "tempo-routes";

export const router = createBrowserRouter([
  // For the tempo routes
  ...(import.meta.env.VITE_TEMPO ? routes : []),
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/livechat",
    element: <LiveChat />,
  },
]);

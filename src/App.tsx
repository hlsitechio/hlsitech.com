import { ContactCard } from "./components/ContactCard";
import { useState, useEffect } from "react";

export function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = "/hlsitechbackground.png";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: "url(/hlsitechbackground.png)" }}
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto p-8 flex items-center justify-center">
        <ContactCard />
      </div>
    </div>
  );
}

export default App;

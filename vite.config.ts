import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite"; // Add Tempo import

// Add conditional plugins for Tempo
const conditionalPlugins = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push("tempo-devtools/dist/babel-plugin");
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...conditionalPlugins],
      },
    }),
    tempo(), // Add the tempo plugin
  ],
  server: {
    port: 3000,
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": ["lucide-react"],
        },
      },
    },
  },
});

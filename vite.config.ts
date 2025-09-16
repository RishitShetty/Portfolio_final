import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/Portfolio/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // Remove the componentTagger reference
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

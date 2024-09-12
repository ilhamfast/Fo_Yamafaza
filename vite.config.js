import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lazismu/", // Base URL di mana aplikasi Anda akan di-host
  build: {
    outDir: "dist", 
    assetsDir: "assets", 
    emptyOutDir: true, // Bersihkan direktori output sebelum setiap build
  },
});

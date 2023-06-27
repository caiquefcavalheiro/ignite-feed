import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //configurando a porta da aplicação
  server: {
    port: 5173,
  },
});

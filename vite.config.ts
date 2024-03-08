import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsonServer from "json-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SNRShop/",
});

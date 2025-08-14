import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pragmatisch/", // ✅ Include trailing slash!
  plugins: [react()],
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-monile-app/",
  plugins: [vue()],
  server: {
    host: "192.168.91.128",
    port: 5500,
  },
});

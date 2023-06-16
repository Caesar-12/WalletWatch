import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const resolvePath = (path) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ exportAsDefault: true })],
  root: resolvePath("src/pages"),
  build: {
    rollupOptions: {
      input: {
        home: resolvePath("src/pages/index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});

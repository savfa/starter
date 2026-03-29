import { defineConfig } from "vite";
import * as path from "node:path";
import svgrPlugin from "vite-plugin-svgr";
import pugPlugin from "vite-plugin-pug";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgrPlugin(), pugPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/variables";`, // Опционально: глобальные переменные
      },
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@icons": path.resolve(__dirname, "./src/assets/img/icons"),
    },
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        // nested: path.resolve(__dirname, 'nested/index.html')
      },
    },
  },
  // publicDir: "/public",
  // base: "/",
});

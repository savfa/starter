import { defineConfig } from "vite";
import * as path from "node:path";
import svgrPlugin from "vite-plugin-svgr";
import pugPlugin from "vite-plugin-pug";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin(),
    pugPlugin({
      localImports: true, // ✅ Разрешает относительные импорты в src
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/variables";`, // Опционально: глобальные переменные
      },
    },
  },
  resolve: {
    extensions: [".js", ".ts", ".pug", ".html"],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@icons": path.resolve(__dirname, "./src/assets/img/icons"),
    },
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        componentButton: path.resolve(
          __dirname,
          "src/components/ui-kit/button/button.html"
        ),
        main: path.resolve(__dirname, "src/pages/index.html"),
      },
    },
  },
  // publicDir: "/public",
  // base: "/",
});

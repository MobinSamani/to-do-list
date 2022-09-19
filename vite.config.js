import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  server: {
    port: "3000",
    host: "localhost"
  },
  preview: {
    port: "3000",
    host: "localhost"
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "to-do-list",
      fileName: (format) => `to-do-list.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue()]
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      "@style": path.resolve(__dirname, "src/style"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@style/variables" as *;
          @use "@style/mixins" as *;
        `,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // 2000 kB = 2 Mo, pour que le warning disparaisse
  }
});

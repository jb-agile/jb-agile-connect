import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const ROOT = "/sessions/brave-affectionate-rubin/mnt/JB-Agile/websites/jb-agile-connect";

export default defineConfig({
  root: ".",
  cacheDir: "/tmp/vite-cache-verify",
  server: { host: "0.0.0.0", port: 8080, hmr: { overlay: false } },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    outDir: "/tmp/dist-verify2",
    emptyOutDir: true,
  },
});

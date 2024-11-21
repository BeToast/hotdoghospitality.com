import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Generate timestamp for cache busting
const timestamp = new Date().getTime();
``;
export default defineConfig({
   plugins: [react()],
   root: ".",
   build: {
      outDir: "dist/",
      emptyOutDir: true,
      rollupOptions: {
         output: {
            entryFileNames: `assets/[name]-[hash]-${timestamp}.js`,
            chunkFileNames: `assets/[name]-[hash]-${timestamp}.js`,
            assetFileNames: `assets/[name]-[hash]-${timestamp}.[ext]`,
         },
      },
   },
   server: {
      port: 6969,
   },
});

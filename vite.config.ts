/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from "@vitejs/plugin-react-swc";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
export default defineConfig(({mode}) => ({
  base: mode === "production" ? "/react-lesson" : undefined,
  plugins: [react(), reactClickToComponent(), tsconfigPaths()],
  test: {
    environment: "happy-dom",
    css: true,
    setupFiles:[ "./src/test/setup.ts"],
  },
}));

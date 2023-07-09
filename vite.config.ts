import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import mixPlugin, { type Adapter } from "vite-plugin-mix";

interface MixConfig {
  handler: string;
  adapter?: Adapter;
}

type MixPlugin = (config: MixConfig) => Plugin;
interface Mix {
  default: MixPlugin;
}

const mix = (mixPlugin as unknown as Mix).default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mix({ handler: "./server/index.ts" })],

  /**
   * resolve file path
   */
});

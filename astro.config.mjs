import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import FontToBuffer from "unplugin-font-to-buffer/vite";

export default defineConfig({
    adapter: cloudflare({
    }),
    vite: {
        plugins: [FontToBuffer()],
    }
});

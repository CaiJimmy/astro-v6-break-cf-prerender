import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import FontToBuffer from "unplugin-font-to-buffer/vite";

export default defineConfig({
    adapter: cloudflare({
        /// When this is set to 'workerd' (default), `dev` server can render the server island correctly
        /// However, with `node` server island request will return a 400 error
        prerenderEnvironment: 'node'
    }),
    vite: {
        plugins: [FontToBuffer()],
    }
});

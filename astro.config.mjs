import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import solidJs from '@astrojs/solid-js';

export default defineConfig({
  adapter: cloudflare({
      /// When this is set to 'workerd' (default), `dev` server can render the server island correctly
      /// However, with `node` server island request will return a 400 error
      prerenderEnvironment: 'node'
  }),

  integrations: [solidJs()],
});
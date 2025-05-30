import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://emilyolszewski.dev',
  integrations: [tailwind(), icon(), compress()],
  output: 'static',
});

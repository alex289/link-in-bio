import { defineConfig } from 'astro/config';
import vercel from '@juanm04/astrojs-vercel/edge';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});

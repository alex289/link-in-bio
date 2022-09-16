import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import vercel from '@juanm04/astrojs-vercel/edge';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [image()]
});
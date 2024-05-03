import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import zeabur from '@zeabur/astro-adapter/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  adapter: zeabur(),
  output: 'server'
});
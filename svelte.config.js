  import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: mdsvex(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),
    paths: {
      base: process.env.BASE_PATH || '/teracore'
    }
  }
};

export default config;
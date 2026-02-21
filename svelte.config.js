import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: mdsvex(),
  kit: {
    adapter: adapter()
  }
};

export default config;
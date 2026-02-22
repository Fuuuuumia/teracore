import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: mdsvex(),
  kit: {
    adapter: adapter({
      pages:'build',
      assets: 'build',

      fallback: '404.html'
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  }
};

export default config;
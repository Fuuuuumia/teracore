import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: mdsvex({
    rehypePlugins: [rehypeSlug]
  }),
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
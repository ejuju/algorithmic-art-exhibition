/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
// import { resolve } from "path"

const config = {
  preprocess: sveltePreprocess(),
  kit: {
    target: '#svelte',
    adapter: vercel(),
  },
  //   vite: {
  //     resolve: {
  //       alias: {
  //         $components: resolve('./src/components'),
  //         $stores: resolve('./src/stores'),
  //         $util: resolve('./src/util'),
  //       },
  //     },
  //   },
};

export default config;

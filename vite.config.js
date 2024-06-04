import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/ramengo/',
  build: {
    outDir: '../dist',
  },
  envDir: '../',
  envPrefix: 'VITE_',
});

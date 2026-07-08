/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rosepine: {
          base: '#191724',
          surface: '#1f1d2e',
          overlay: '#26233a',
          light: '#e0def4',
          subtle: '#908caa',
          rose: '#eb6f92',
          gold: '#f6c177',
          pine: '#31748f',
          iris: '#c4a7e7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
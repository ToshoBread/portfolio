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
          foam: '#9ccfd8',
        },
      },
      fontFamily: {
        sans: ['Sora Variable', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk Variable', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jp: ['Kosugi', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
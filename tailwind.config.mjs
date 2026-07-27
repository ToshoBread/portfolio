/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rosepine: {
          base: 'rgb(25, 23, 36)',
          surface: 'rgb(31, 29, 46)',
          overlay: 'rgb(38, 35, 58)',
          muted: 'rgb(110, 106, 134)',
          subtle: 'rgb(144, 140, 170)',
          foreground: 'rgb(224, 222, 244)',
          love: 'rgb(235, 111, 146)',
          gold: 'rgb(246, 193, 119)',
          rose: 'rgb(235, 188, 186)',
          pine: 'rgb(49, 116, 143)',
          foam: 'rgb(156, 207, 216)',
          iris: 'rgb(196, 167, 231)',
          'highlight-low': 'rgb(33, 32, 46)',
          'highlight-med': 'rgb(64, 61, 82)',
          'highlight-high': 'rgb(82, 79, 103)',
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
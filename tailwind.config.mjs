/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rosepine: {
          base: 'rgb(var(--color-rosepine-base))',
          surface: 'rgb(var(--color-rosepine-surface))',
          overlay: 'rgb(var(--color-rosepine-overlay))',
          muted: 'rgb(var(--color-rosepine-muted))',
          subtle: 'rgb(var(--color-rosepine-subtle))',
          foreground: 'rgb(var(--color-rosepine-foreground))',
          love: 'rgb(var(--color-rosepine-love))',
          gold: 'rgb(var(--color-rosepine-gold))',
          rose: 'rgb(var(--color-rosepine-rose))',
          pine: 'rgb(var(--color-rosepine-pine))',
          foam: 'rgb(var(--color-rosepine-foam))',
          iris: 'rgb(var(--color-rosepine-iris))',
          'highlight-low': 'rgb(var(--color-rosepine-highlight-low))',
          'highlight-med': 'rgb(var(--color-rosepine-highlight-med))',
          'highlight-high': 'rgb(var(--color-rosepine-highlight-high))',
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
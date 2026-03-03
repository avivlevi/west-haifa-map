import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: { grid: 'grid-template-rows' },
      transitionTimingFunction: { ios: 'cubic-bezier(0.32, 0.72, 0, 1)' },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          light: '#22c55e',
          dark: '#15803d',
        },
        accent: '#059669',
        dark: {
          DEFAULT: '#071910',
          2: '#0d2118',
          3: '#142b1e',
        },
        bg: {
          DEFAULT: '#f8fafc',
          2: '#f1f5f9',
        },
        card: {
          DEFAULT: '#ffffff',
          2: '#f8fafc',
        },
        'text-base': '#0f172a',
        'text-muted': '#64748b',
        border: 'rgba(15, 23, 42, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'hero-fade': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'fcta-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '70%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        'hero-fade': 'hero-fade 0.8s ease forwards',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 1.5s ease-in-out infinite',
        'fcta-pulse': 'fcta-pulse 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

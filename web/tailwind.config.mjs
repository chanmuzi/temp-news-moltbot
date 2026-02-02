/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Anthropic/Claude inspired palette
        claude: {
          50: '#FFF8F3',
          100: '#FFEEDD',
          200: '#FFD9B8',
          300: '#FFC08A',
          400: '#E89B6B',
          500: '#D97757',  // Claude signature terra cotta
          600: '#C4623F',
          700: '#A44E31',
          800: '#7D3A24',
          900: '#5C2A1A',
        },
        sand: {
          50: '#FAFAF8',
          100: '#F5F4F0',
          200: '#ECEAE3',
          300: '#DDD9CE',
          400: '#C4BFB2',
          500: '#A9A395',
          600: '#8A8475',
          700: '#6B665A',
          800: '#4D4A41',
          900: '#302E28',
        },
        anthro: {
          bg: '#FAF9F6',       // Warm cream background
          surface: '#FFFFFF',
          dark: '#1A1915',     // Warm dark
          darkSurface: '#25241F',
          darkMid: '#2F2E28',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 10px -5px rgba(0,0,0,0.04)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
        'card-dark-hover': '0 10px 25px -5px rgba(0,0,0,0.4), 0 4px 10px -5px rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

const path = require('path');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f9f4',
          100: '#dfeee5',
          200: '#c3e1cb',
          300: '#9fd0a4',
          400: '#6cb77d',
          500: '#3e8d53',
          600: '#2f6e40',
          700: '#224f32',
          800: '#173d27',
          900: '#0f2b1b',
        },
        gold: {
          100: '#f5ebd8',
          200: '#ebd3a1',
          300: '#d5af58',
        },
        ivory: '#f8f3ee',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(30, 70, 52, 0.12)',
      },
      fontFamily: {
        sans: ['var(--font-arabic)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

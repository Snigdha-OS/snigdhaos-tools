/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6495ED',
        dark: {
          100: '#1a1a1a',
          200: '#242424',
          300: '#2d2d2d',
          400: '#353535',
        },
        nord: {
          0: '#1a1a1a',  // Darker background
          1: '#242424',
          2: '#2d2d2d',
          3: '#353535',
          4: '#D8DEE9',
          5: '#E5E9F0',
          6: '#ECEFF4',
          7: '#6495ED',  // Primary color
          8: '#7BA4EE',  // Lighter primary
          9: '#5886DE',  // Darker primary
          10: '#4B77CF',
          11: '#BF616A',
          12: '#D08770',
          13: '#EBCB8B',
          14: '#A3BE8C',
          15: '#B48EAD',
        },
      },
    },
  },
  plugins: [],
};
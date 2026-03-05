import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#374E38',
          medium: '#5A7A5C',
        },
        accent: '#B99B48',
        cream: '#E6DEC8',
        farmgreen: '#F3F8F1',
        dark: '#1E1E1E',
        'text-primary': '#252525',
        'text-medium': '#7A7A7A',
        'sage-light': '#D5E5D1',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

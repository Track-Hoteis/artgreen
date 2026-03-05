/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5016',
          medium: '#4A7C2F',
        },
        accent: '#8B7355',
        cream: '#FAF8F4',
        farmgreen: '#F0F7E8',
        dark: '#1C2B0E',
        'text-medium': '#5C6B4A',
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

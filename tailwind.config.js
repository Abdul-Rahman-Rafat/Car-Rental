/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5B3BE3',
          primaryDark: '#4A2FD0',
          bg: '#F5F5F7',
          card: '#FFFFFF',
          text: '#111111',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

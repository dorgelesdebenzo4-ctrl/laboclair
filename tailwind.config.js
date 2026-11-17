/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'] },
      colors: {
        labo: { 50: '#eef7fb', 100: '#d5ecf5', 200: '#a9d8ea', 400: '#3fa6cc', 500: '#1b88b3', 600: '#136d92', 700: '#115873', 900: '#0b2f3d' },
        ink: { 900: '#0f1720', 800: '#16202b', 700: '#1f2b38', 600: '#2c3a49' },
      },
    },
  },
  plugins: [],
}

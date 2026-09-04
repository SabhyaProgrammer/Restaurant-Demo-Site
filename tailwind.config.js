/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#F0F4F1',
          500: '#4A6B53',
          900: '#1A2F22',
        },
        accent: {
          500: '#C35B48',
          600: '#A1402F',
        },
        surface: {
          50: '#F9F6F0',
          100: '#F0EBE1',
          800: '#2C2C2C',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

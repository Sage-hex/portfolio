/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1C1C1E",
        card: "#2C2C2E",
        'muted-foreground': '#A1A1AA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            filter: 'brightness(1)',
          },
          '50%': {
            filter: 'brightness(1.5)',
          },
        },
      },
    },
  },
  plugins: [],
}

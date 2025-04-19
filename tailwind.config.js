


// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "#1C1C1E",
//         card: "#2C2C2E",
//         'muted-foreground': '#A1A1AA',
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         bubbleGlow: 'bubbleGlow 7s ease-in-out infinite', // Glowing bubbles animation
//       },
//       keyframes: {
//         bubbleGlow: {
//           '0%, 100%': {
//             opacity: 0.2,
//             transform: 'scale(1)',
//           },
//           '50%': {
//             opacity: 0.7,
//             transform: 'scale(1.2)',
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// }


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
        bubbleGlow: 'bubbleGlow 4s ease-in-out infinite',
      },
      keyframes: {
        bubbleGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '0.6',
          },
        },
      },
    },
  },
  plugins: [],
}

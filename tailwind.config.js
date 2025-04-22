

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class', // <-- Enable class-based dark mode
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "#1C1C1E", // Custom background color
//         card: "#2C2C2E", // Custom card color
//         'muted-foreground': '#A1A1AA', // Subtle text color
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'], // Default sans-serif font family
//       },

//       animation: {
//         bubbleGlow: 'bubbleGlow 4s ease-in-out infinite', // Existing animation for bubbles
//         rainbowGlow: 'rainbowGlow 4s linear infinite', // 🔄 New rainbow glowing animation
//       },

//       keyframes: {
//         bubbleGlow: {
//           '0%, 100%': {
//             transform: 'scale(1)',
//             opacity: '0.3',
//           },
//           '50%': {
//             transform: 'scale(1.2)',
//             opacity: '0.6',
//           },
//         },

//         // 🌈 Rainbow glowing effect for border (used on contact form modal box)
//         rainbowGlow: {
//           '0%, 100%': { borderColor: '#ff0080' },
//           '25%': { borderColor: '#ff8c00' },
//           '50%': { borderColor: '#40e0d0' },
//           '75%': { borderColor: '#8a2be2' },
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
        background: "#1C1C1E", // Custom background color
        card: "#2C2C2E", // Custom card color
        'muted-foreground': '#A1A1AA', // Subtle text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default sans-serif font family
      },

      animation: {
        bubbleGlow: 'bubbleGlow 4s ease-in-out infinite', // Existing animation for bubbles
        rainbowGlow: 'rainbowGlow 4s linear infinite', // Rainbow glowing animation for borders
        spinner: 'spinner 1s linear infinite', // New loading spinner animation
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
        
        rainbowGlow: {
          '0%, 100%': { borderColor: '#ff0080' },
          '25%': { borderColor: '#ff8c00' },
          '50%': { borderColor: '#40e0d0' },
          '75%': { borderColor: '#8a2be2' },
        },

        // 💫 New spinner animation for a rotating effect
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

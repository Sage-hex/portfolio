


// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   darkMode: 'class',
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "#1C1C1E",
// //         card: "#2C2C2E",
// //         'muted-foreground': '#A1A1AA',
// //       },
// //       fontFamily: {
// //         sans: ['Inter', 'sans-serif'],
// //       },
// //       animation: {
// //         bubbleGlow: 'bubbleGlow 7s ease-in-out infinite', // Glowing bubbles animation
// //       },
// //       keyframes: {
// //         bubbleGlow: {
// //           '0%, 100%': {
// //             opacity: 0.2,
// //             transform: 'scale(1)',
// //           },
// //           '50%': {
// //             opacity: 0.7,
// //             transform: 'scale(1.2)',
// //           },
// //         },
// //       },
// //     },
// //   },
// //   plugins: [],
// // }


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
//         background: "#1C1C1E",
//         card: "#2C2C2E",
//         'muted-foreground': '#A1A1AA',
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         bubbleGlow: 'bubbleGlow 4s ease-in-out infinite',
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
        rainbowGlow: 'rainbowGlow 4s linear infinite', // 🔄 New rainbow glowing animation
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

        // 🌈 Rainbow glowing effect for border (used on contact form modal box)
        rainbowGlow: {
          '0%, 100%': { borderColor: '#ff0080' },
          '25%': { borderColor: '#ff8c00' },
          '50%': { borderColor: '#40e0d0' },
          '75%': { borderColor: '#8a2be2' },
        },
      },
    },
  },
  plugins: [],
}

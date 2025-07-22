/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Lobster', 'cursive'],
      },
      colors: {
        primary: "dark grey",    // Soft blue
        secondary: "#FFE5B4",  // Peach
        accent: "black",     // Soft pink
        bgLight: "#F9F9F9",    // Light background
        darkText: "#333333",   // Dark text
      },
    },
  },
  plugins: [],
};

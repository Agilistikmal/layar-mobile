/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: "#08101d",
        white: "#FFF",
        brand: "#980300",
      },
    },
  },
  plugins: [],
};

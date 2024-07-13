/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Poppins", "sans-serif"],
        tittle: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};

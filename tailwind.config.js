/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Poppins", "sans-serif"],
        tittle: ["Permanent Marker", "cursive"],
      },
      transitionTimingFunction: {
        tooltip: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};

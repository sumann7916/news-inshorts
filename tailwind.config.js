/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      },
      colors: {
        brand: "#DC2F02",
        darkNavy: "#03071E", // Almost Black
        darkMaroon: "#370617", // Deep Maroon
        darkRed: "#6A040F", // Darker Red
        crimson: "#9D0208", // Dark Red
        primaryRed: "#D00000", // Primary Red
        brightRed: "#DC2F02", // Bright Red-Orange
        deepOrange: "#E85D04", // Deep Orange
        orange: "#F48C06", // Orange
        gold: "#FAA307", // Gold
        yellow: "#FFBA08", // Yellow,
        teal: "#028090", //Teal
      },
    },
  },
  plugins: [],
};

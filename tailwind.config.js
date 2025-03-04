/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      thin: "50",
      bold: "700",
    },
    theme: {
      extend: {
        colors: {
          "custom-color": "#786262", // Custom color defined here
          "custom-color": "#8E7B68",
          "custom-color": "#FFFBFB",
          "custom-color": "#806C6C",
          "custom-color": "#E1BFBF",
          "custom-color": "#FFF0F0",
          "custom-color": "#060000",
       
        },
      },
    },
    extend: {
      fontFamily: {
        italiana: ["Italiana", "serif"], // Add Italiana as a custom font
        inter: ["Inter", "sans-serif"], // Add Inter font
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#18191b",// "#050816",
        secondary: "#FFFFFF", // "#aaa6c3",
        tertiary: "#273433", //"#151030",
        "black-100": "#18262e",//"#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        title: "#15B5E8",
        selected: "#15B5E8",
        no_selected: "#FFFFFF",
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

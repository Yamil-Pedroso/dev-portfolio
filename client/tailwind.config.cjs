/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        grayClear: "#f8f9fc",
        grayMid: "#424242",
        black1: "#1f1f25",
        greenMid: "#61b272",
        ocreMid: "#e9a13b",
      },
      border : {
        "20px": "20px solid #1f1f25",
      },
      boxShadow: {
        card: "8px 8px 0 0 black",
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
}

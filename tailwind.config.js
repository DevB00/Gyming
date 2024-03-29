/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
    screens: {
      xxs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
    },
    backgroundImage: {
      schedule:
        "url('./images/schedule-bg.jpg')",
    },
   backgroundPosition :{
      "schedule-bg": "center",
   },
  },
  plugins: [],
};

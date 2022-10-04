module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'nunito': ['"Nunito Sans"', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: [
          '"Nunito Sans"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "background-gray": "#ededed",
      "header-gray": "#e5e5e5",
      "item-gray": "#d1d1d1",
      "dark-green": "#455143",
      "light-green": "#667763",
    },
  },
  plugins: [],
};

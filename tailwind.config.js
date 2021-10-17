const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class",
  presets: [require("./preset-1")],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class",
  presets: [require("./preset")],
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

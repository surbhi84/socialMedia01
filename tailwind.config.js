const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#92FCDB",
        primaryLight: "#CBFEEE",
        primaryDark: "#18CBAF",

        // second: "#9358DB",
        // secondLight: "",

        darker: "rgb(43, 42, 51)",
        // darkCol: "rgba(66, 65, 77, 1)",
        darkCol: "#37343E",
        darkLight: "rgba(66, 65, 77, 1)",
        // darkLight: "#555160",
      },
      screens: {
        xs: "340px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};

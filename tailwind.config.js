const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        customping: "animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;",
      },

      keyframes: {
        customping: {
          "75%, 100%": { transform: "scale(2)", opacity: "50" },
        },
      },

      colors: {
        primary: "#92FCDB",
        primaryLight: "#CBFEEE",
        primaryDark: "#18CBAF",

        darker: "rgb(43, 42, 51)",
        darkCol: "#37343E",
        darkLight: "rgba(66, 65, 77, 1)",
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

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        customping: " customping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        loading: "loading 2.5s ",
        slide: "slide 3s",
      },

      keyframes: {
        customping: {
          "75%, 100%": { transform: "scale(2)", opacity: "50" },
        },
        loading: {
          "100%": {
            width: "100%",
          },
        },

        slide: {
          "0%": {
            transform: "translateX(-110%)",
          },
          "20%": {
            transform: "translateX(0%)",
          },
          "80%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-110%)",
          },
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

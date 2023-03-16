/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "36em",
      },
      colors: {
        body: "#F5F5F5",
        energy: "#A66FF0",
        range: "#FF7E86",
        purple: "#A162F7",
        dark1: "#242731",
        yellow: "#F6CC0D",
        carrotOrange: "#FFE0BA",
        carrotOrange1: "#FF9619",
        tangaroa: "#0F2837",
        pompadour: "#6E1946",
        romantic: "#FAC39B",
        tertiary: "#E1DFA4",
        darkGray: "#72767C",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        effra: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};

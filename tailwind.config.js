/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#222",
          "200": "#111",
          "300": "#090909",
        },
        black: "#000",
        gold: "#ffcb04",
        white: "#fff",
        silver: "#c7c7c7",
      },
      fontFamily: {
        inter: "Inter",
        "liberation-serif": "'Liberation Serif'",
      },
    },
    fontSize: {
      "lgi-2": "19.2px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

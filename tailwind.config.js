/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-grey": "#f8f8fa",
        white: "#fff",
        lightsteelblue: {
          "100": "#b0bbd5",
          "200": "#a3aed0",
        },
        darkslateblue: "#2b3674",
        mediumseagreen: "#05cd99",
        lightskyblue: "#6ad2ff",
        black: "#131315",
        grey: "#687c94",
        primary: "#7848f4",
        ghostwhite: "#f4f7fe",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        xl: "20px",
        "41xl": "60px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

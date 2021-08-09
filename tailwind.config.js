module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    zIndex: {
      max: 9999,
    },
    extend: {
      colors: {
        ice: "#C2E2E9",
        icelight: "#daf3f8",
        pelorous: "#46B2C8",
        astronaut: "#023A59",
        elm: "#1C697A",
        chill: "#0F808C",
        haiti: "#200E32",
      },
    },
    screens: {
      xs: "320px",

      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      ave: "Avenir, Helvetica, Arial, sans-serif",
      noto: "Noto Sans",
    },
  },
  variants: {
    outline: ["responsive", "focus", "hover", "active"],
  },
  plugins: [],
}

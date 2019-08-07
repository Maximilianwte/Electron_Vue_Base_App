module.exports = {
  theme: {
    extend: {
      spacing: {
        "40" : "11rem",
        "128": "36rem"
      } 
     },
    colors: {
      bg_primary: "var(--bg-primary)",
      bg_secondary: "var(--bg-secondary)",
      main_primary: "var(--main-primary)",
      main_secondary: "var(--main-secondary)",
    },
    borderRadius: {
      "xl": "1rem"
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}

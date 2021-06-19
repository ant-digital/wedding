module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "romeo-text": "#284135",
        "romeo-background": "#f3f2f1",
        "sageGreen":"#1f5c3d"
      },
      fontFamily: {
        romeo: "eb garamond",
        greatVibe:'Great Vibes'
      },
      backgroundImage: theme => ({
        foto: "url('images/photo-1-dark.jpg')",
        body : "url('images/sageGreen/body-bg.webp')",
        welcome : "url('images/sageGreen/welcome-bg.webp')",
        frame : "url('images/sageGreen/frame.webp')",
       })
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
}

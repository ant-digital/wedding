module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "romeo-text": "#284135",
        "romeo-background": "#f3f2f1",
        "sageGreen":"#1f5c3d",
        "gold":"#ffdc73",
        "blue":"#0045ac"
      },
      fontFamily: {
        romeo: "eb garamond",
        greatVibe:'Great Vibes',
        sansNarrow:"PT Sans Narrow",
        openSans:"Open Sans Condensed",
        archivo:"Archivo Narrow"
      },
      backgroundImage: theme => ({
        foto: "url('images/photo-1-dark.jpg')",
        bodyGreen : "url('images/sageGreen/body-bg.jpg')",
        welcomeGreen : "url('images/sageGreen/welcome-bg.jpg')",
        frameGreenSmall : "url('images/sageGreen/frame.png')",
        frameGreenBig : "url('images/sageGreen/frame-big.png')",
        bodyBlack : "url('images/blackGold/body-bg.jpg')",
        bodyBlackSmall : "url('images/blackGold/body-bg-small.jpg')",
        blue : "url('images/serenityBlue/bg.jpg')",
       })
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
}

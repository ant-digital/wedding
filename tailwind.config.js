module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "romeo-text": "#284135",
        "romeo-background": "#f3f2f1",
      },
      fontFamily: {
        "romeo": "eb garamond",
        gab:['Gabriola'],
        greatVibe:['Great Vibes' ,'cursive']
      },
      backgroundImage: theme => ({
        'banner-flower': "url('images/banner.png')"
       })
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
}

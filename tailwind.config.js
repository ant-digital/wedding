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
        abril:['Abril Fatface', 'cursive'],
        sheline:['Sheline'],
        greatVibe:['Great Vibes' ,'cursive'],
        // edwardian:['Edwardian Script ITC']
      },
      backgroundImage: theme => ({
        'banner-flower': "url('images/banner.png')",
        'foto': "url('images/photo-1-dark.jpg')",
       })
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
}

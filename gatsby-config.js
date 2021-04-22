const plugins = [
  "gatsby-plugin-postcss",
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/icon.png",
    },
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Defaults used for gatsbyImageData and StaticImage
      defaults: {
        formats: ["auto", "webp", "avif"],
        placeholder: "blurred",
      },
    },
  },
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      outputPath: `src/__generated__/gatsby-types.d.ts`,
      emitSchema: {
        "src/__generated__/gatsby-schema.graphql": true,
      },
    },
  },
  `gatsby-plugin-tsconfig-paths`,
]

if (process.env.NODE_ENV === "production") {
  plugins.push("gatsby-plugin-preact")
}

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    siteUrl: "https://wedding.chrsep.dev",
    title: "Wedding",
    author: "@antdigital",
  },
  plugins,
}

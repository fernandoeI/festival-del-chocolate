module.exports = {
  siteMetadata: {
    title: `Festival del Chocolate`,
    description: `El 11º festival del chocolate es una homenaje a la cultura olmeca y a su legado, el cacao, del que se nace la bebida ancestral el chocolate.`,
    siteUrl: `http://festivaldelchocolate.mx`,
    twitterUsername: `@FestivalChoco`,
    image: `src/assets/images/icon.png`,
    author: `Fernando Vidal`,
    keywords: `Cacao, Chocolate, Olmeca, Maya, Azteca, Haciendas, Comalcalco, Cunduacán, Gastronomía, Memorable, Catas`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-DD6L98EXGB", // Google Analytics / GA
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K9Q27K3",
        includeInDevelopment: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-sass",
  ],
};

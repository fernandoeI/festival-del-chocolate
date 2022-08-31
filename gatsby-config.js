module.exports = {
  siteMetadata: {
    title: `Festival del Chocolate`,
    description: `El 11º festival del chocolate es una homenaje a la cultura olmeca y a su legado, el cacao, del que se nace la bebida ancestral el chocolate.`,
    siteUrl: `http://www.festivaldelchocolate.mx`,
    twitterUsername: `@FestivalChoco`,
    image: `src/assets/images/icon.png`,
    author: `Fernando Vidal`,
    keywords: `Cacao, Chocolate, Olmeca, Maya, Azteca, Haciendas, Comalcalco, Cunduacán, Gastronomía, Memorable, Catas`,
  },
  plugins: [
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

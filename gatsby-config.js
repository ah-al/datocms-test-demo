require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'Test Demo',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: '89cf9dbabfedfbd88c4b0b01346631'},
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'M2QxNzkzYmYtMjljOC00NjBiLWFjNDYtYzBiZTgxM2Q1ZGUwNjM3MTE2MTU0OTU4MzQ0NzY4',
        autopop: true
      }
    },
  ],
}

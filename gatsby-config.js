module.exports = {
  siteMetadata: {
    title: 'UTMR',
    author: 'Hunter Denys',
    description: 'Site of hunting & fishing club UTMR',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/duck.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

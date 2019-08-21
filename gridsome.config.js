module.exports = {
  siteName: 'UIKit Vue Wordpress',
  siteDescription: 'A UIKit Vue Wordpress starter',
  plugins: [
     { 
        use: '@gridsome/source-wordpress',
        options: {
        baseUrl: "http://vuewp.xhostcom.com", // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
        post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
        post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
   ]
}



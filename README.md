# Vue UIKit Wordpress Gridsome


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gridsome/gridsome-starter-wordpress)


## Install
`gridsome create my-gridsome-project wordpress`

## Guide & ToDo
 error
Fix build problem below seems to be jquery
Failed to render /about
TypeError: Cannot read property 'document' of undefined
    at assets/js/app.893948e0.js:4736:13
    at assets/js/app.893948e0.js:4725:7
    at Object.<anonymous> (src/assets/js/jquery.js:2:212)
    at Object.module.exports.module.exports (assets/js/app.893948e0.js:8557:30)
    at __webpack_require__ (webpack/bootstrap:25:0)
    at Module.<anonymous> (assets/js/app.893948e0.js:10565:14)
    at __webpack_require__ (webpack/bootstrap:25:0)
    at Module.<anonymous> (node_modules/gridsome/app/main.js:4:9)
    at __webpack_require__ (webpack/bootstrap:25:0)
    at Object.module.exports.module.exports (assets/js/app.893948e0.js:3544:18)


Add your WordPress URL to the plugin options, runs dev server fine.

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
  ]
}

```

See all [options](https://gridsome.org/plugins/@gridsome/source-wordpress).

## Included templates

This starter includes basic templates for categories, tags and posts.

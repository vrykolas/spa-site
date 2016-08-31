const Webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.html',
    './src/js/app.js',
    './src/sass/style.scss'
  ],
  output: {
    path: './public',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]!html-minify'
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel?presets=es2015&cacheDirectory!eslint'
      },
      {
        test: /\.scss$/,
        loader: 'file?name=style/[name].css!sass'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new Webpack.optimize.DedupePlugin(),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
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
        loader: 'file?name=style/[name].css!sass?sourceMap'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap-sass/assets/fonts', to: 'fonts' },
      { from: 'src/images', to: 'images' }
    ]),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore',
      Bootstrap: 'bootstrap-sass'
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ImageminPlugin({
      optipng: {
        optimizationLevel: 7
      },
      gifsicle: {
        optimizationLevel: 3
      },
      jpegtran: {
        progressive: true
      },
      svgo: {
      },
      plugins: []
    })
  ]
};

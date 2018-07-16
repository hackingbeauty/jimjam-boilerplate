const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const appConfig = require('configs/config-main')


module.exports = {
  mode: 'production',

  output: {
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "config-styles";',
              includePaths: [
                path.join(__dirname, '..', '/src/configs')
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __DEVELOPMENT__: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new WebpackPwaManifest({
      name: appConfig.name,
      short_name: appConfig.shortName,
      description: appConfig.description,
      background_color: appConfig.splashScreenBackground
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ])
  ]
}

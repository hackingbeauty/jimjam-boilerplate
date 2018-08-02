import webpack           from 'webpack'
import path              from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client'
  ],

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            localIdentName: '[hash:base64:5][path]-[local]'
          }
        },
        { loader: 'resolve-url-loader' },
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
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

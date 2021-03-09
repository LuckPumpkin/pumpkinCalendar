/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 14:14:48
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-09 17:16:09
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  // module: 'development',
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: "less-loader",
            // lessOptions: {
            //   javascriptEnabled: true,
            // }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 8090,
    compress: true,
    historyApiFallback: true,  // 当后端路由没有命中，就会自动render index.html
  }
}
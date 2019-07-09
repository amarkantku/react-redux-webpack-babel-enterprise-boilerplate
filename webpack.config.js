const webpack = require('webpack');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "/dist"),
    filename: "[name].[hash].js"
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    host: 'localhost',
    contentBase: join(__dirname, 'dist'),
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/public','index.html'),
      filename: "./index.html"
    })
  ]
};
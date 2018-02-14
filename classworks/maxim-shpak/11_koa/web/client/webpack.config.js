const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
require("file-loader");

const config = {
  entry: {
    index: ["./index.js"],
    reviews: ["./reviews.js"]
  },
  context: path.join(__dirname, "./"),
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]',
          publicPath: './',
          outputPath: 'images/'
        }  
      }
    ]
  },
  resolve: {
    extensions: [".js", ".css"],
    modules: ["./", "node_modules"],
  },

  output: {
    path: path.join(__dirname, "./public"),
    filename: "[name].js",
    publicPath: "/"
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ["index"],
      filename: "index.html",
      template: "index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ["reviews"],
      filename: "reviews.html",
      template: "reviews.html"
    })
  ]
};

module.exports = config;

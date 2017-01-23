"use strict";
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/Router.jsx",
  output: {
    path: "./dist",
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query:
        {
          presets:['react', 'es2015']
        },
        include: [
          path.resolve(__dirname, "src")
        ],
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 3 versions!sass?indentedSyntax")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.csv$/,
        loader: "file"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
        allChunks: true
    })
  ]
};

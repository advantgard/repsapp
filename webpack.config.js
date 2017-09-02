"use strict";

const path = require("path");

const config = {
  devtool: "source-map",
  entry: {
    "app": [
      "react-hot-loader/patch",
	    "./src/index.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
	      test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.svg$/,
        loader: "svg-url-loader"
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./sass-config.scss";',
              includePaths: [
                path.join(__dirname, '/')
              ]
            }
          }
        ]
      }
    ]
  }

};

module.exports = config;
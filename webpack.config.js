const path = require ("path");
const ExtractCSSPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: "./src/styles/index.scss"
  },
  output: {
    path: path.join(__dirname, "./build/"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          ExtractCSSPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    writeToDisk: true
  },
  plugins: [
    new CleanPlugin(),
    new CopyPlugin([{ from: "src/index.html", to: "index.html" }]),
    new ExtractCSSPlugin({ filename: "[name].css" }),
    new OptimizeCSSPlugin()
  ]
}
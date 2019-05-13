const path = require ("path");
const ExtractCSSPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

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
  plugins: [
    new ExtractCSSPlugin({ filename: "[name].css" }),
    new OptimizeCSSPlugin(),
  ]
}
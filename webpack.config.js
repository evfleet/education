const path = require ("path");
const HTMLPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const ExtractCSSPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/scripts/index.js",
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
    new HTMLPlugin({
      template: "src/pages/home/index.html",
      filename: "index.html"
    }),
    new ExtractCSSPlugin({ filename: "[name].css" }),
    new OptimizeCSSPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      }
    })
  ]
}
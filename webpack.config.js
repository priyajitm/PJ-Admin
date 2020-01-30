const path = require("path");
const webpack = require("webpack");
const MiniCssExttractPlugin = require("mini-css-extract-plugin");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "demo"),
    compress: true,
    publicPath: "demo",
    writeToDisk: true
  },
  entry: "./src/js/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "demo/js"),
    publicPath: "demo"
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExttractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugin: function() {
                return [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../fonts/",
              publicPath: "../fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExttractPlugin({
      filename: "../css/app.css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

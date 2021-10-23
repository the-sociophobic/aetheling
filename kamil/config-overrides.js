const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function override(config, env) {
  config.entry = "./src/index.js";
  config.plugins = [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ];

  config.output = {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  };

  return config;
};

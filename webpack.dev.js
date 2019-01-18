const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: [/\.jsx$/, /\.js$/],
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10 * 1024
        }
      }
    ]
  }
});

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: [/\.jsx$/, /\.js$/],
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
});
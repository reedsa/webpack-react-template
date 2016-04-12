import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    __dirname + '/app/main.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'react-hot'
      },
      {
        test : /\.js$/,
        include : __dirname + '/app',
        loader : 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  }
}

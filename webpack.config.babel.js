import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

var paths = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    paths.app
  ],
  output: {
    path: paths.build,
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
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.app
      }
    ],
    loaders : [
      {
        test: /\.js$/,
        loader: 'react-hot',
        include: paths.app
      },
      {
        test : /\.js$/,
        loader : 'babel-loader',
        include: paths.app,
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  }
}

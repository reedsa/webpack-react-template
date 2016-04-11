import webpack from 'webpack';

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
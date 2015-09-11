var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devtool: '#source-maps',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
      {test: /\.html$/, loader: 'html'}
    ]
  }
};

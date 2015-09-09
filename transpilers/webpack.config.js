module.exports = {
  entry: {
    babel: './index.js',
    typescript: './index.ts'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  resolve: {extensions: ['', '.ts', '.js']},
  devtool: '#source-maps',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.ts$/, loader: 'awesome-typescript-loader'}
    ]
  }
};

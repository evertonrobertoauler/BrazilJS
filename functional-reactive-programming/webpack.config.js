module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js/, loader: "babel", exclude: /node_modules/},
      {test: /\.css/, loader: "style!css"},
      {test: /\.(eot|woff|ttf|woff2|svg)/, loader: "url"}
    ]
  },
  devtool: '#source-maps',
};

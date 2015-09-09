module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "webpack.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
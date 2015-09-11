var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: 'src',
    frameworks: ['jasmine'],
    files: ['index.karma.js'],
    webpack: {
      devtool: 'eval',
      module: {
        loaders: [
          {test: /\.html$/, loader: 'html'}
        ],
        preLoaders: [
          {test: /\.(spec|karma)\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
          {test: /\.js$/, loader: 'isparta!eslint', exclude: /(node_modules|\.(spec|karma)\.js$)/}
        ]
      },
      cache: true
    },
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },
    preprocessors: {
      'index.karma.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: path.join(__dirname, 'coverage'),
      subdir: '.',
      reporters: [{type: 'html'}]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};

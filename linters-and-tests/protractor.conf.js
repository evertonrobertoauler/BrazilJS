exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    showTiming: true
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/**/*.e2e.js']
};

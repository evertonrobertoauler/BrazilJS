var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('protractor', function(done) {
  var cmd = exec('webdriver-manager start --standalone & webpack && http-server src');
  cmd.stdout.on('data', function(data) {

    var match = data.match(/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/);

    if (match && match[0]) {
      var cmd2 = exec('protractor --baseUrl=' + match[0]);

      cmd2.stdout.on('data', function(data) {

        process.stdout.write(data);

        if (data.match(/Finished\sin/)) {
          console.log('');
          done();
          process.exit();
        }
      });
    }
  });
});

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('uglify', function () {
  return gulp.src('index.js')
    .pipe(uglify())
    .pipe(rename("index.gulp.min.js"))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['uglify']);
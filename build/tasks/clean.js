var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('clean', function() {
  return gulp.src([paths.app.output, paths.benchmarks.output])
             .pipe(vinylPaths(del));
});

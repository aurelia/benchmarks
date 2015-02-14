var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function() {
  browserSync({ proxy: "localhost:8080"} );
  gulp.watch(paths.app.source, ['build-app', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.benchmarks.source, ['build-benchmarks', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.app.html, ['build-html', browserSync.reload]).on('change', reportChange);
});

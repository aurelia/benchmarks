var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-6to5');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');

var buildJs = function(config) {
    return gulp.src(config.source)
        .pipe(plumber())
        .pipe(changed(config.output, {extension: '.js'}))
        .pipe(sourcemaps.init())
        .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.root }))
        .pipe(gulp.dest(config.output));
};

var buildHtml = function(config) {
    return gulp.src(config.html)
               .pipe(changed(config.output, {extension:'.html'}))
               .pipe(gulp.dest(config.output));
};

gulp.task('build-app', function () {
    return buildJs(paths.app);
});

gulp.task('build-benchmarks', function() {
    buildJs(paths.benchmarks);
    return buildHtml(paths.benchmarks);
});

gulp.task('build-html', function () {
    return buildHtml(paths.app);
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-app', 'build-benchmarks', 'build-html'],
    callback
  );
});

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', ['build'], function() {
    return nodemon({
        script: 'server/main.js',
        ignore: ['./app', './benchmarks', './dist', './test']
    });
});

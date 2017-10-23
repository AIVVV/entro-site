var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
	clean = require('gulp-clean');

var SOURCEPATHS = {
    jsSource: 'src/scripts/*.js'
};

var APPPATH = {
    root: 'app',
    js: 'app/scripts'
};

gulp.task('clean-scripts', function() {
    return gulp.src(APPPATH.js + '/*.js', { read: false, force: true })
        .pipe(clean());
});

gulp.task('scripts', ['clean-scripts'], function() {
    return gulp.src(SOURCEPATHS.jsSource)
        .pipe(gulp.dest(APPPATH.js));
});
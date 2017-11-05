var gulp = require('gulp'),
    webpack = require('webpack'),
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

gulp.task('bootstrap-js', function() {
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(APPPATH.js));
});

gulp.task('jquery', function() {
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(APPPATH.js));
});

gulp.task('scripts', ['clean-scripts', 'bootstrap-js', 'jquery'], function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if (err) {
            console.log(err, toString());
        }
        console.log(stats.toString());
        callback();
    });
});
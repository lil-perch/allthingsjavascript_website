var gulp = require('gulp');
var uglify = require('gulp-uglify');

//File paths
var SCRIPTS_PATH = 'builds/public/assets/js/**/*.js';
// Styles
gulp.task('styles', function() {
    console.log('starting styles task');
});

// Scripts
gulp.task('scripts', function() {
    console.log('starting scripts task');
    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest('builds/public/dist/js'));
});
// Images

gulp.task('default', function() {
    console.log('Starting default task');
});

gulp.task('watch', function() {
    console.log('Starting watch task');
    require('./server.js');
    gulp.watch(SCRIPTS_PATH, ['scripts']);
});
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');


//File paths
var SCRIPTS_PATH = 'builds/public/assets/js/**/*.js';
var CSS_PATH = 'builds/public/assets/css/**/*.css';
var SASS_MAIN_PATH = 'builds/public/assets/sass/main.scss';
var SASS_IE8_PATH = 'builds/public/assets/sass/ie8.scss';
var HTML_PATH = 'builds/public/*.html';
// Styles
gulp.task('styles', function() {
    console.log('starting styles task');
    return gulp.src(CSS_PATH)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('builds/public/dist/css'))
        .pipe(connect.reload());
});

gulp.task('compass', function() {
    console.log('starting styles task');
    return gulp.src(SASS_MAIN_PATH)
        .pipe(compass({
            sass: 'builds/public/assets/sass',
            image: 'builds/public/images',
            style: 'expanded'
        }))
        .pipe(gulp.dest('builds/public/assets/css'))
        .pipe(connect.reload());
});

// Scripts
gulp.task('scripts', function() {
    console.log('starting scripts task');
    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest('builds/public/dist/js'))
        .pipe(connect.reload());
});
// Images

gulp.task('default', ['scripts', 'compass', 'connect', 'html', 'watch']);

gulp.task('all', ['scripts', 'compass', 'connect', 'html', 'watch']);

gulp.task('connect', function() {
    connect.server({
        root: './builds/public',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src(HTML_PATH)
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    console.log('Starting watch task');
    /*require('./server.js');
    liveReload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);*/
    gulp.watch(CSS_PATH, ['styles']);
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch('builds/public/assets/sass/**/*.scss', ['compass']);
    gulp.watch(HTML_PATH, ['html']);
});




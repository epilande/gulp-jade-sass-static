var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    express = require('express'),
    server = express(),
    connectLivereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 3000;

// Easily manage paths
var paths = {
  sass: 'assets/sass/styles.scss',
  js: 'assets/js/**/*.js',
  views: 'assets/views/*.jade',
  dist: 'public/'
};

// Growl error messages
function onError(err) {
  notify.onError(err.message)(err);
  this.emit('end');
}

// Compile sass to css and auto prefix
gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(plumber(onError))
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest(paths.dist + 'css'));
});

// Jade to html
gulp.task('jade', function() {
  return gulp.src([
    paths.views,
    "!assets/views/layout.jade" // Exclude layout jade
  ]).pipe(jade())
    .pipe(gulp.dest(paths.dist));
});

// Uglify javascript
gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + 'js/'));
});

// Copy bower components into 'paths.dist + js/libs'
gulp.task('copy', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js'
  ]).pipe(gulp.dest(paths.dist + 'js/libs'));
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('assets/views/**/*.jade', ['jade']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch(paths.js, ['js']);

  gulp.watch([
    paths.dist + '**/*'
  ]).on('change', function(file) {
    livereload.changed(file.path);
  });
});

// Start server on port `serverport` and connect livereload
gulp.task('serve', function() {
  livereload.listen();

  server.use(connectLivereload({
    port: livereloadport
  }));
  server.use(express.static(paths.dist));

  server.listen(serverport);
});

// Build and Deploy task
gulp.task('build', ['sass', 'jade', 'js', 'copy']);

// Default task
gulp.task('default', ['build', 'serve', 'watch']);
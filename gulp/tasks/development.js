'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  global.isProd = false;

  runSequence('styles', 'javascript', 'images', 'views', 'copy', 'watch', cb);

});

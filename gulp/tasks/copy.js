'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copy', function() {

  // Copy bower components into 'public/js/libs'
  return gulp.src(config.copy.bower)
    .pipe(gulp.dest(config.scripts.dest + '/libs'));

});
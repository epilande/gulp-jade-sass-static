'use strict';

var config = require('../config');
var gulp   = require('gulp');
var jade   = require('gulp-jade');

gulp.task('views', function() {

  // Process view files from /views
  return gulp.src([
    config.views.src,
    '!views/layout.jade' // Exclude layout jade
  ]).pipe(jade({
      pretty: global.isProd ? false : true
    }))
    .pipe(gulp.dest(config.dist.root));

});
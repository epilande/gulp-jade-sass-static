'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'assets/sass/**/*.scss',
    'dest': 'public/css'
  },

  'scripts': {
    'src' : 'assets/js/**/*.js',
    'dest': 'public/js'
  },

  'images': {
    'src' : 'assets/images/**/*',
    'dest': 'public/images'
  },

  'views': {
    'watch': 'views/**/*.jade',
    'src': 'views/*.jade'
  },

  'copy': {
    'bower': [
      'bower_components/jquery/dist/jquery.js'
    ]
  },

  'dist': {
    'root'  : 'public'
  }

};
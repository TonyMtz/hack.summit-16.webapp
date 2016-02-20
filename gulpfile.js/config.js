/*
 * Project configuration.
 * ======================
 */

'use strict';

var ROOT = './';

// Where this project source code lives.
var SRC = 'webapp';

// Where final distribution files will be copied.
var DIST = 'public';

// Where compiled scripts will be placed.
var BUILD = 'public';

module.exports = {

  // Build output directories.
  dirs: {
    build: BUILD,
    dist: DIST,
    root: ROOT
  },

  // File paths and glob patterns.
  files: {
    // Finds the jade templates to be compiled to html.
    jade: SRC + '/**/*.jade',

    // Finds the stylus to be compiled to css.
    stylus: SRC + '/**/*.styl',

    // Finds the scripts to be compiled.
    scripts: SRC + '/**/*.js'
  },

  // The Browserify settings.
  bundle: {
    debug: true,
    standalone: 'app',
    entries: [
      'webapp/index.js'
    ],
    transform: [
      'babelify'
    ]
  }

};

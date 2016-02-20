/*
 * Development tasks.
 * ==================
 */

'use strict';

module.exports = function (gulp, $, config) {

  // Are we in development mode?
  var isWatching = false;

  var buffer = require('vinyl-buffer');
  var source = require('vinyl-source-stream');
  var browserSync = require('browser-sync').create();

  var handleErrors = $.notify.onError('<%= error.message %>');

  var dirs = config.dirs;
  var files = config.files;

  var bundler = require('./helpers/bundler');

  // Bundle the application source code using Browserify.
  gulp.task('dev:scripts', function () {
    return bundler(config.bundle, isWatching)
      .bundle()
      .on('error', handleErrors)
      .pipe(source('js/app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(dirs.build))
      .pipe(browserSync.stream());
  });

  // Monitors files for changes, trigger rebuilds as needed.
  gulp.task('dev:watch', function () {
    gulp.watch(files.jade, ['dev:jade']);
    gulp.watch(files.stylus, ['dev:stylus']);
    gulp.watch(files.scripts, ['dev:scripts']);
  });

  gulp.task('dev:jade', function () {
    return gulp.src([files.jade])
      .pipe($.jade({
        pretty: true
      }))
      .pipe(gulp.dest(dirs.build));
  });

  gulp.task('dev:stylus', function () {
    return gulp.src([files.stylus])
      .pipe($.stylus({
        compress: true
      }))
      .pipe($.concat('style.css'))
      .pipe(gulp.dest(dirs.build));
  });

  // The main development task.
  gulp.task('dev', [
    'dev:jade',
    'dev:stylus',
    'dev:scripts',
    'dev:watch'
  ]);

  // Aliasing `dev` as default task.
  gulp.task('default', ['dev']);

};

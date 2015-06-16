/**
 * build.js
 *
 */
'use strict';

var gulp = require('gulp');

gulp.task('build', [
    'clean',
    'modernizr',
    'sass',
    'images:build',
    'js'
]);

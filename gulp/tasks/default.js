/**
 * default.js
 *
 * Run this for local development.
 *
 */
'use strict';

var gulp = require('gulp');

gulp.task('default', [
    'clean',
    'modernizr',
    'sass',
    'images',
    'watch'
]);

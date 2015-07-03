/**
 * default.js
 *
 * Run this for local development.
 *
 */
'use strict';

var gulp = require('gulp');
var sequence = require('gulp-sequence');

gulp.task('default', sequence(['clean'], [
    'modernizr',
    'sass',
    'images',
    'watch'
]));

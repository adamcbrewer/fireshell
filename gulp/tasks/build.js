/**
 * build.js
 *
 */
'use strict';

var gulp = require('gulp');
var sequence = require('gulp-sequence');

gulp.task('build', sequence(['clean'], [
    'modernizr',
    'sass',
    'images:build',
    'js'
]));

/**
 * default.js
 *
 * Run this for local development.
 *
 */
'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('default', sequence(['build:dev'], [
    'watch'
]));

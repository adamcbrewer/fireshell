/**
 * build.js
 *
 */
'use strict';

import sequence from 'gulp-sequence';

gulp.task('build', ['build:prod']);

gulp.task('build:dev', sequence(['clean'], [
    'templates',
    'modernizr',
    'css',
    'images:notoptimised',
    'js'
]));

gulp.task('build:prod', sequence(['clean'], [
    'templates',
    'modernizr',
    'css',
    'images:optimised',
    'js'
]));

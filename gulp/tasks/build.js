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
    'sass',
    'images:notoptimised',
    'js'
]));

gulp.task('build:prod', sequence(['clean'], [
    'templates',
    'modernizr',
    'sass',
    'images:optimised',
    'js'
]));

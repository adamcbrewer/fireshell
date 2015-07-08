/**
 * watch.js
 *
 * Consult config.js for files being watched.
 * The only exception is the task 'js:watchify' which is handled by watchify
 * within the javascript tasks file.
 *
 */
'use strict';

import gulp from 'gulp';
import config from '../config.js';

gulp.task('watch', () => {

    gulp.watch(config.sass.watch, ['sass']);

    gulp.watch([
        config.images.srcRaster,
        config.images.srcSvg
    ], ['images']);

    // Watch tasks not directly watched by gulp.watch
    gulp.start(['js:watchify']);

});

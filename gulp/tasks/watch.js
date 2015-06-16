/**
 * watch.js
 *
 * Consult config.js for files being watched.
 * The only exception is the task 'js:watchify' which is handled by watchify
 * within the javascript tasks file.
 *
 */
'use strict';

var gulp = require('gulp');
var config = require('../config.js');

gulp.task('watch', function() {

    gulp.watch(config.sass.watch, ['sass']);

    gulp.watch([
        config.images.srcRaster,
        config.images.srcSvg
    ], ['images']);

    // Watch tasks not directly watched by gulp.watch
    gulp.start(['js:watchify']);

});

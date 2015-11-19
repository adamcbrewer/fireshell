/**
 * watch.js
 *
 * Consult config.js for files being watched.
 * The only exception is the task 'js:watchify' which is handled by watchify
 * within the javascript tasks file.
 *
 */
'use strict';

gulp.task('watch', () => {

    gulp.watch(config.css.watch, ['css']);

    gulp.watch(config.templates.srcCopy
        .concat(config.templates.srcReplace), ['templates']);

    gulp.watch([
        config.images.srcRaster,
        config.images.srcSvg
    ], ['images:notoptimised']);

    // Watch tasks not directly watched by gulp.watch
    gulp.start(['js:watchify']);

});

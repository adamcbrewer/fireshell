/**
 * watch.js
 *
 * Consult config.js for files being watched.
 * The only exception is the task 'js:watchify' which is handled by watchify
 * within the javascript tasks file.
 *
 */
'use strict';

gulp.task('w', ['watch']);

gulp.task('watch', ['build:dev'], () => {

    gulp.watch(config.css.watch, ['css']);

    gulp.watch(config.templates.srcCopy
        .concat(config.templates.srcReplace), ['templates'])
        .on('change', browserSync.reload);

    gulp.watch([
            config.images.srcSvg,
            config.images.srcRaster
        ], ['images:notoptimised'])
        .on('change', browserSync.reload);

    gulp.watch([config.images.srcSymbols], ['images:symbols'])
        .on('change', browserSync.reload);

    // Watch tasks not directly watched by gulp.watch
    gulp.start(['js:watchify']);

});

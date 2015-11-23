/**
 * favicon.js
 *
 */
'use strict';

gulp.task('favicon', () => {

    let pipeline = gulp.src(config.favicon.src)
        .pipe(gulp.dest(config.favicon.dest));

    return pipeline;

});

/**
 * fonts.js
 *
 * Copy font files to the app directory. Used in
 * conjunction with SASS.
 *
 */
'use strict';

gulp.task('fonts', () => {

    let pipeline = gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));

    return pipeline;

});

/**
 * modernizr.js
 *
 * Progressive enhancement. Modernizr will scan all .js and .scss files
 * for references to tests and include those in the build.
 *
 */
'use strict';

import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import modernizr from 'gulp-modernizr';

gulp.task('modernizr', () => {

    let pipeline = gulp.src(config.modernizr.src)
        .pipe(modernizr(config.modernizr.options))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.modernizr.dest));

    return pipeline;

});

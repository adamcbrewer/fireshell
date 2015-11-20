/**
 * modernizr.js
 *
 * Progressive enhancement. Modernizr will scan all .js and .scss files
 * for references to tests and include those in the build.
 *
 */
'use strict';

import size from 'gulp-size';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import modernizr from 'gulp-modernizr';

gulp.task('modernizr', () => {

    let pipeline = gulp.src(config.modernizr.src)
        .pipe(modernizr(config.modernizr.options))
        .pipe(
            uglify()
            .on('error', gutil.log.bind(gutil, gutil.colors.bold.red('[ Modernizr Uglify Error ]')))
        )
        .pipe(rename({ suffix: '.min' }))

        .pipe(size({
            showFiles: config.size.showFiles,
            gzip: config.size.gzip,
            title: gutil.colors.bold.yellow('[ Modernizr payload ]')
        }))

        .pipe(gulp.dest(config.modernizr.dest));

    return pipeline;

});

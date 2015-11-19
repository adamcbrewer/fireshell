/**
 * sass.js
 *
 * Source-mapped and Autoprefixed. Stylestats is also used to provide a
 * json file of CSS statistics.
 *
 */
'use strict';

import size from 'gulp-size';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import minifycss from 'gulp-minify-css';
import stylestats from 'gulp-stylestats';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../util/handle-errors';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('css', ['fonts', 'css:sass']);

gulp.task('css:sass', () => {

    let pipeline = gulp.src(config.css.src)

        .pipe(sourcemaps.init())

        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))

        // autoprefix, minify and sourcemaps
        .pipe(autoprefixer(config.css.autoprefixer))
        .pipe(minifycss())
        .pipe(sourcemaps.write())

        .pipe(rename({ basename: config.css.basename, suffix: '.min' }))
        .pipe(gulp.dest(config.css.dest))

        // Style statistics
        .pipe(size({
            showFiles: config.size.showFiles,
            gzip: config.size.gzip,
            title: "CSS payload:"
        }))
        .pipe(stylestats(config.stylestats))
        .pipe(rename({ basename: config.css.basename + '.stats' }))

        .pipe(gulp.dest(config.css.dest));

    return pipeline;

});

/**
 * sass.js
 *
 * Source-mapped and Autoprefixed. Stylestats is also used to provide a
 * json file of CSS statistics.
 *
 */
'use strict';

import gulp from 'gulp';
import size from 'gulp-size';
import sass from 'gulp-sass';
import config from '../config.js';
import rename from 'gulp-rename';
import minifycss from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';
import stylestats from 'gulp-stylestats';
import handleErrors from '../util/handle-errors';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('sass', ['fonts'], () => {

    let pipeline = gulp.src(config.sass.src)

        .pipe(sourcemaps.init())

        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))

        // autoprefix, minify and sourcemaps
        .pipe(autoprefixer(config.sass.autoprefixer))
        .pipe(minifycss())
        .pipe(sourcemaps.write())

        .pipe(rename({ basename: config.sass.basename, suffix: '.min' }))

        .pipe(size({
            showFiles: config.size.showFiles,
            gzip: config.size.gzip,
            title: "CSS size:"
        }))

        .pipe(gulp.dest(config.sass.dest))

        // Style statistics
        .pipe(stylestats(config.stylestats))
        .pipe(rename({ basename: config.sass.basename + '.stats' }))
        .pipe(gulp.dest(config.sass.dest));

    return pipeline;

});

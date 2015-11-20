/**
 * images.js
 *
 * Image optimisation for rasters (jpg, png, gif) and vectors.
 * Copy task for local development.
 *
 */
'use strict';

import size from 'gulp-size';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import imagemin from 'gulp-imagemin';

gulp.task('images', ['images:optimised']);

gulp.task('images:optimised', [
    'images:vector',
    'images:raster',
    'images:symbols'
]);

gulp.task('images:notoptimised', () => {

    let pipeline = gulp.src([
            config.images.srcRaster,
            config.images.srcSvg
        ])
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:raster', () => {

    let pipeline = gulp.src(config.images.srcRaster)
        .pipe(imagemin(config.images.imagemin.raster))
        .pipe(size({
            showFiles: config.size.showFiles,
            title: gutil.colors.bold.yellow('[ Raster image payload ]')
        }))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:vector', ['images:symbols'], () => {

    let pipeline = gulp.src(config.images.srcSvg)
        .pipe(imagemin(config.images.imagemin.vector))
        .pipe(size({
            showFiles: config.size.showFiles,
            title: gutil.colors.bold.yellow('[ SVG image payload ]')
        }))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:symbols', () => {

    let pipeline = gulp.src(config.images.srcSymbols)
        .pipe(imagemin(config.images.imagemin.vector))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(size({
            showFiles: config.size.showFiles,
            title: gutil.colors.bold.yellow('[ SVG symbol payload ]')
        }))
        .pipe(rename(config.images.symbolsName))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

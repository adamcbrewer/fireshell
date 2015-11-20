/**
 * images.js
 *
 * Image optimisation for rasters (jpg, png, gif) and vectors.
 * Copy task for local development.
 *
 */
'use strict';

import size from 'gulp-size';
import imagemin from 'gulp-imagemin';

gulp.task('images', ['images:optimised']);

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
            title: "Image size (raster):"
        }))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:vector', () => {

    let pipeline = gulp.src(config.images.srcSvg)
        .pipe(imagemin(config.images.imagemin.vector))
        .pipe(size({
            showFiles: config.size.showFiles,
            title: "Image size (vector):"
        }))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:optimised', [
    'images:vector',
    'images:raster'
]);

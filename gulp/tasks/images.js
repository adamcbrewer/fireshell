/**
 * images.js
 *
 * Image optimisation for rasters (jpg, png, gif) and vectors.
 * Copy task for local development.
 *
 */
'use strict';

var gulp = require('gulp');
var size = require('gulp-size');
var config = require('../config.js');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {

    var pipeline = gulp.src([
            config.images.srcRaster,
            config.images.srcSvg
        ])
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:raster', function () {

    var pipeline = gulp.src(config.images.srcRaster)
        .pipe(imagemin({
            optimizationLevel: 4,
            progressive: true,
            interlaced: true,
            pngquant: true
        }))
        .pipe(size({
            showFiles: config.size.showFiles,
            title: "Image size (raster):"
        }))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:vector', function () {

    var pipeline = gulp.src(config.images.srcSvg)
        .pipe(imagemin({
            svgoPlugins: [
                // More options here: https://github.com/svg/svgo
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false },
                { removeEmptyAttrs: false }
            ],
        }))
        .pipe(size({
            showFiles: config.size.showFiles,
            title: "Image size (vector):"
        }))
        .pipe(gulp.dest(config.images.dest));

    return pipeline;

});

gulp.task('images:build', [
    'images:vector',
    'images:raster'
]);

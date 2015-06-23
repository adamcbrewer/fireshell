/**
 * fonts.js
 *
 * Copy font files to the app directory. Used in
 * conjunction with SASS.
 *
 */
'use strict';

var gulp = require('gulp');
var config = require('../config.js');

gulp.task('fonts', function () {

    var pipeline = gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));

});

/**
 * bump.js
 *
 * Project versioning.
 *
 */
'use strict';

var gulp = require('gulp');
var git = require('gulp-git');
var bump = require('gulp-bump');
var gutil = require('gulp-util');
var config = require('../config.js');
var tagVersion = require('gulp-tag-version');

var fs = require('fs');

gulp.task('bump:version', function () {

    var options = {};

    // arguments: --type=(patch|minor|major)
    var type = gulp.args.type || 'patch';

    // if --type=<type> is not specified then either of
    // --patch|--minor|--major is accepted
    if (gulp.args.patch) type = 'patch';
    if (gulp.args.minor) type = 'minor';
    if (gulp.args.major) type = 'major';

    // versions override type
    if (gulp.args.version) {
        options.version = gulp.args.version;
    } else if (type) {
        options.type = type;
    }

    var pipeline = gulp.src(config.bump.src)
        .pipe(bump(options))
        .pipe(gulp.dest('./'))

    return pipeline;

});

gulp.task('bump', ['bump:version'], function() {

    // The package file is cached by Gulp at runtime, so even after
    // bumping the version we still have to read it synchronously
    var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    var versionRaw = pkg.version;
    var version = 'v' + versionRaw;

    var pipeline = gulp.src('./package.json')
        .pipe(git.commit(version))
        .pipe(tagVersion());

    return pipeline;

});

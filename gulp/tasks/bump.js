/**
 * bump.js
 *
 * Project versioning.
 *
 */
'use strict';

import fs from 'fs';
import git from 'gulp-git';
import bump from 'gulp-bump';
import tagVersion from 'gulp-tag-version';

gulp.task('bump:version', () => {

    let options = {};

    // arguments: --type=(patch|minor|major)
    let type = gulp.args.type || 'patch';

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

    let pipeline = gulp.src(config.bump.src)
        .pipe(bump(options))
        .pipe(gulp.dest('./'))

    return pipeline;

});

gulp.task('bump', ['bump:version'], () => {

    // The package file is cached by Gulp at runtime, so even after
    // bumping the version we still have to read it synchronously
    let version = `v${config.pkg.version}`;

    let pipeline = gulp.src('./package.json')
        .pipe(git.commit(version))
        .pipe(tagVersion());

    return pipeline;

});

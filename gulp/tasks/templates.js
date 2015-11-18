/**
 * templates.js
 *
 */
'use strict';

import replace from 'gulp-replace-task';

gulp.task('templates', ['templates:replace', 'templates:copy']);

gulp.task('templates:replace', () => {

    let pipeline = gulp.src(config.templates.srcReplace)
        .pipe(replace(config.templates.replace))
        .pipe(gulp.dest(config.templates.dest));

    return pipeline;

});

gulp.task('templates:copy', () => {

    let pipeline = gulp.src(config.templates.srcCopy)
        .pipe(gulp.dest(config.templates.dest));

    return pipeline;

});

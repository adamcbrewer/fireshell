/**
 * javascript.js
 *
 * Using browserify and babelify to bundle all javascript
 * files, js:watchify uses watchify to recompile when files
 * have changed.
 *
 */
'use strict';

import size from 'gulp-size';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import watchify from 'watchify';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';

// This ensures the following args properties are passed
// into browserify as watchify requires them:
// { cache: {}, packageCache: {} }
const options = Object.assign({}, watchify.args, config.js.browserify);

// used for the watchify stream below
let w;


/**
 * Single build using browserify and babelify.
 *
 */
gulp.task('js', () => {

    let pipeline = browserify(options)

        .transform(babelify)
        .bundle()

        .on('error', gutil.log.bind(gutil, gutil.colors.bold.red('[ Browserify Error ]')))

        .pipe(source(config.js.outputFilename))
        .pipe(buffer())

        .pipe(size({
            showFiles: config.size.showFiles,
            gzip: config.size.gzip,
            title: gutil.colors.bold.yellow('[ JS payload ]')
        }))

        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))


        .pipe(gulp.dest(config.js.dest));

    return pipeline;

});


/**
 * Run watchify on browserify tasks ad re-bundle when
 * files have changed
 *
 */
gulp.task('js:watchify', bundlify);

function bundlify() {

    w = w || getWatchifyInstance();

    let pipeline = w

        .bundle()

        .on('error', gutil.log.bind(gutil, gutil.colors.bold.red('[ Browserify Error ]')))

        .pipe(source(config.js.outputFilename))
        .pipe(buffer())

        .pipe(gulpIf(browserSync.active, browserSync.reload({ stream: true })))

        .pipe(size({
            showFiles: config.size.showFiles,
            gzip: config.size.gzip,
            title: gutil.colors.bold.yellow('[ JS payload ]')
        }))

        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(config.js.dest));

    return pipeline;

};

function getWatchifyInstance () {

    // Open the watchify stream if not already set
    // and bind update/log events.

    if (!w) {
        w = watchify(browserify(options));
        w.transform(babelify);
        w.on('update', bundlify);
        w.on('log', gutil.log.bind(gutil, gutil.colors.bold.yellow('[ Watchify ]')));
    }

    return w;

}

/**
 * serve.js
 *
 * BrowserSync Server
 *
 */
'use strict';

gulp.task('serve', ['watch'], function() {

    browserSync.init(config.serve.options);

});

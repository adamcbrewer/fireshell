/**
 * serve.js
 *
 * BrowserSync Server
 *
 */
'use strict';

gulp.task('serve', ['build', 'watch'], function() {

    browserSync.init(config.serve.options);

});

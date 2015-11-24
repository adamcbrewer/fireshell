/**
 * test.js
 *
 */
'use strict';

import mocha from 'gulp-mocha';

gulp.task('test', () => {

    let pipeline = gulp.src('./test/*', { read: false })

        .pipe(mocha({
            reporter: 'list',
            bail: false,
            require: []
        }));

    return pipeline;

});

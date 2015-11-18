/**
 * clean.js
 *
 * Removes all dist files in preparation for a clean build.
 *
 */
'use strict';

import del from 'del';

gulp.task('clean:assets', () => {

    for (let dirs in config.clean) {
        del(config.clean[dirs]);
    }

});

gulp.task('clean', [
    'clean:assets'
]);

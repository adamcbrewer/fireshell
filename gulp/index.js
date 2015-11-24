/**
 * index.js
 *
 * Auto-loads all gulp tasks within ./tasks
 * Also handles arguments and environment settings which can be
 * accessed throughout each of the tasks.
 *
 */
'use strict';

import gulpIf from 'gulp-if';
import gulp from 'gulp';
import gutil from 'gulp-util';
import config from './config';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';

global.gulpIf = gulpIf;
global.gulp = gulp;
global.gutil = gutil;
global.config = config;
global.browserSync = browserSync.create();

requireDir('./tasks', { recurse: true });

// Specify arguments by double-dashing eg:
// --production
// --type=<type>
gulp.args = gutil.env;

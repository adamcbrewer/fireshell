'use strict';

global.Site = {
    basePath: document.body.getAttribute('data-base-url'),
    userAgent: navigator.userAgent,
    platform: navigator.platform
};

/**
 * For importing any third-party libraries:
 *
 * In the terminal:
 * $ npm install --save jquery
 *
 * In this app:
 * global.$ = require('jquery');
 *
 */

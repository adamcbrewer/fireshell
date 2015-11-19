/**
 * config.js
 *
 */
'use strict';

import pkg from '../package.json';

let dest = './app';
let src = './src';
let assets = dest + '/assets'

const config = {
    pkg: pkg,
    dest: dest,
    src: src
};

// The following extensions of config should
// have corresponsing gulp tasks

config.images = {
    srcRaster: src + '/img/{./,**/}*.{jpg,jpeg,png,gif}',
    srcSvg: src + '/img/{./,**/}*.svg',
    dest: assets + '/img'
};

config.templates = {
    dest: dest,
    srcCopy: [
        src + '/templates/**/*.html',
        '!' + src + '/templates/index.html'
    ],
    srcReplace: [
        src + '/templates/index.html'
    ],
    replace: {
        patterns: [
            {
                match: 'version',
                replacement: pkg.version
            }
        ]
    }
};

config.bump = {
    src: [
        './package.json'
    ]
};

config.css = {
    src: src + '/sass/screen.scss',
    dest: assets + '/css/',
    basename: 'styles',
    watch: src + '/sass/**/*',
    autoprefixer: {
        browsers: [
            'last 2 version',
            'ie 10',
            'ios 6',
            'android 4'
        ]
    }
};

config.fonts = {
    src: src + '/fonts/*',
    dest: assets + '/fonts/'
};

config.js = {
    dest: assets + '/js',
    outputFilename: 'scripts.min.js',
    browserify: {
        entries: [
            src + '/js/app.js'
        ],
        debug: true
    }
};

config.modernizr = {
    src: [
        src + '/js/**/*.js',
        src + '/sass/**/*.scss',
    ],
    dest: assets + '/js',
    options: {
        cache : false,
        uglify : false,
        // forced tests
        tests : [
            'touchevents',
            'flexbox'
        ],
        // Default settings: http://modernizr.com/download/
        "options" : [
            "setClasses",
            "addTest",
            "html5printshiv",
            "testProp",
            "fnBind"
        ],
    }
};

config.clean = {
    html: [
        dest + '/index.html'
    ],
    assets: [
        assets + '/css/*',
        assets + '/img/*',
        assets + '/fonts/*'
    ],
    js: [
        assets + '/js/*',
    ]
};

config.size = {
    showFiles: true,
    gzip: true
};

config.stylestats = {
    type: 'json',
    outfile: true,
    config: {
        "published": true,
        "paths": true,
        "stylesheets": true,
        "styleElements": true,
        "size": true,
        "dataUriSize": true,
        "ratioOfDataUriSize": true,
        "gzippedSize": true,
        "simplicity": true,
        "rules": true,
        "selectors": true,
        "declarations": true,
        "averageOfIdentifier": true,
        "mostIdentifier": true,
        "mostIdentifierSelector": true,
        "averageOfCohesion": true,
        "lowestCohesion": true,
        "lowestCohesionSelector": true,
        "totalUniqueFontSizes": true,
        "uniqueFontSizes": true,
        "totalUniqueFontFamilies": true,
        "uniqueFontFamilies": true,
        "totalUniqueColors": true,
        "uniqueColors": true,
        "idSelectors": true,
        "universalSelectors": true,
        "unqualifiedAttributeSelectors": true,
        "javascriptSpecificSelectors": "[#\\.]js\\-", // .json
        "userSpecifiedSelectors": false,
        "importantKeywords": true,
        "floatProperties": true,
        "mediaQueries": true,
        "propertiesCount": 10,
        "requestOptions": {}
    }
};

module.exports = config;

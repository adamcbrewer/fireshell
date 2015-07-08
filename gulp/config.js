/**
 * config.js
 *
 */
'use strict';

import pkg from '../package.json';

const dest = './app';
const src = './src';
const assets = dest + '/assets'

module.exports = {

    pkg: pkg,
    dest: dest,
    src: src,

    bump: {
        src: [
            './package.json'
        ]
    },
    sass: {
        src: src + '/sass/screen.scss',
        dest: assets + '/css/',
        basename: 'styles',
        watch: src + '/sass/**/*',
        autoprefixer: {
            browsers: [
                'last 2 version',
                'safari 6',
                'ie 9',
                'opera 12.1',
                'ios 6',
                'android 4'
            ]
        }
    },
    fonts: {
        src: src + '/fonts/*',
        dest: assets + '/fonts/'
    },
    js: {
        dest: assets + '/js',
        outputFilename: 'scripts.min.js',
        browserify: {
            entries: [
                src + '/js/app.js'
            ],
            debug: true
        }
    },
    modernizr: {
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
    },
    images: {
        srcRaster: src + '/img/{./,**/}*.{jpg,jpeg,png,gif}',
        srcSvg: src + '/img/{./,**/}*.svg',
        dest: assets + '/img'
    },
    clean: {
        assets: [
            assets + '/css/*',
            assets + '/img/*'
        ],
        js: [
            assets + '/js/*',
        ]
    },
    size: {
        showFiles: true,
        gzip: true
    },
    stylestats: {
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
    }
}

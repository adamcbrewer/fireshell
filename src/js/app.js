'use strict';

/**
 * Either import directly form the modules directory, or you can install
 * third-party libraries via npm (as a dependency) and import them using
 * just the names:
 *
 * <code>global.$ = require('jquery');</code>
 */

import Site from './modules/site.js';

global.Site = new Site();

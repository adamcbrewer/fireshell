'use strict';

let _defaultOptions = {
    dir: '/'
};

class Site {

    constructor (options) {

        options = options || {};

        this.options = Object.assign({}, _defaultOptions, options);

        this.path = location.origin + this.options.dir;
        this.ua = navigator.userAgent;
        this.platform = navigator.platform;

        this.setAttributes();

        return this;

    }

    setAttributes () {

        let htmlElement = document.documentElement;

        htmlElement.setAttribute("data-useragent", this.ua);
        htmlElement.setAttribute("data-platform", this.platform);

    }

}

module.exports = Site;

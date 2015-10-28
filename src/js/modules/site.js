'use strict';

class Site {

    constructor (dir) {

        dir = dir || '/';

        this.path = location.origin + dir;
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

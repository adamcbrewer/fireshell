'use strict';

let _defaultOptions = {
    foo: 'bar'
};

class Test {

    constructor (options) {

        this.options = Object.assign({}, _defaultOptions, options);

        this._events();

        return this;

    }

    _events () {

    }

}

module.exports = Test;

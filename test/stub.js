import { expect, assert } from 'chai';

let Stub = require('../src/js/modules/stub.js');


describe('Stub Module:', () => {

    before(() => {
        // runs before all tests in this block
    });

    after(() => {
        // runs after all tests in this block
    });

    beforeEach(() => {
        // runs before each test in this block
    });

    afterEach(() => {
        // runs after each test in this block
    });

    describe('this.options', () => {

        it('is set and can be extended', () => {

            let stub1 = new Stub();
            let stub2 = new Stub({
                foo: 'baz'
            });

            expect(stub1.options.foo).to.equal('bar');
            expect(stub2.options.foo).to.equal('baz');

        });

    });

});

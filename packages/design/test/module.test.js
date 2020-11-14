const { expect } = require('chai');
const myModule = require('../src/module/module.js').default;

/**
 * @file unit test - 模块模式
 */

describe('module model', function () {
    it('private scope', function () {
        expect(myModule.publicMethod()).to.equal('Hello World');
    });
});
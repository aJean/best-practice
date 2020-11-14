const { expect } = require('chai');
const { getInstance } = require('../src/singleton/singleton.js');

/**
 * @file unit test - 单例模式
 */

describe('singleton model', function () {
    it('same instance', function () {
        expect(getInstance()).to.equal(getInstance());
    });
});

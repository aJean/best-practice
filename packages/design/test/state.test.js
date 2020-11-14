const { expect } = require('chai');
const { Runtime, Type } = require('../src/state/state.js');

/**
 * @file unit test - 状态模式
 */

describe('state model', function () {
    const runtime = new Runtime();
    runtime.changeState(Type.sleep);

    it('init test', function () {
        expect(runtime.getState()).to.equal(Type.sleep);
    });

    it('change test', function () {
        runtime.changeState(Type.weak);
        expect(runtime.getState()).to.equal(Type.weak);
    });
});

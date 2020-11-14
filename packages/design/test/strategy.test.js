const { expect } = require('chai');
const { Runtime, BasicMethod, AdvanceMethod } = require('../src/strategy/strategy.js');

/**
 * @file unit test - 策略模式
 */

describe('strategy model', function () {
    const runtime = new Runtime();
    const basic = new BasicMethod();
    const advance = new AdvanceMethod();

    it('basic right', function () {
        runtime.setMethod(basic);
        expect(runtime.work(1)).to.equal(basic.calcLadule(1));
    });

    it('change test', function () {
        runtime.setMethod(advance);
        expect(runtime.work(2)).to.equal(advance.calcLadule(2));
    });
});

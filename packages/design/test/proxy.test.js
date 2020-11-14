const { expect } = require('chai');
const { StarProxy, Star } = require('../src/proxy/proxy.js');


describe('state model', function () {
    const star = new Star(1);
    const proxy = new StarProxy(star);

    it('proxy send', function () {
        proxy.sendGift('lucy');

        expect(proxy.getLevel()).to.equal(star.level);
    });
});
const { expect } = require('chai');
const { MyFiles, MyFile } = require('../src/compose/compose.js');

/**
 * @file unit test - 组合模式
 */

describe('singleton model', function () {
    const files = new MyFiles();
    const file1 = new MyFile(1);
    const file2 = new MyFile(2);

    files.add(file1);
    files.add(file2);

    files.setHeader('a');

    it('set all', function () {
        expect(file1.value).to.equal('1&a');
        expect(file2.value).to.equal('2&a');
    });
});
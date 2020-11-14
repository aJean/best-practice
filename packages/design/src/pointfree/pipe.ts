/**
 * @file 合成运算过程, 纯函数组合
 */

const getProp = (key, obj ? ) => obj => obj[key];

const isRight = flag => flag === 'ok';

const pipe = (fn1, fn2) => data => fn2(fn1(data));

const invoke = pipe(getProp('type'), isRight);

const list = [
    { name: '张三', type: 'ok' },
    { name: '李四', type: 'no' },
    { name: '王五', type: 'ok' },
].filter(invoke);

console.log(list);
/**
 * @file commonjs 模块是值的复制
 */

let name = 'common js';
const changeName = function () {
  name = 'es module'
}

module.exports = {
  name,
  changeName
}

const f1 = x => x + 10;
const f2 = x => x * 2;

/**
 * 本身是从后往前执行，redux middleware 通过加入 next 中间态改变了执行顺序
 * 函数式 compose
 * 数组 pipe
 */
function compose(funcs) {
  return function(x) {
    return funcs.reduceRight((composed, f) => f(composed(x)))
  }
}

console.log(compose([f1, f2])(1))
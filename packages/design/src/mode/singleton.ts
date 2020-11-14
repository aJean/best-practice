/**
 * @file 单例模式
 */

// export const getInstance = (function () {
//   let obj;

//   return function () {
//     if (!obj) {
//       obj = {};
//     }

//     return obj;
//   };
// })();

const target = { name: 'qy ', data: { index: 0 } };
const proxy = new Proxy(target, {
  get: function (target, key, receiver) {
    console.log(key);
    return target[key];
  },
});

proxy.data.index;


/**
 * 模块模式，使用 iife 来创建独立词法作用域 (闭包)
 */
const myModule = (function() {
  const privateVariable = 'Hello World';

  function privateMethod() {
    return privateVariable;
  }
  return {
    publicMethod: function() {
      return privateMethod();
    }
  };
})();

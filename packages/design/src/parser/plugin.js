/**
 * @file 插件的顺序执行
 */

const plugins = [];

plugins.push(function (next) {
  console.log(1);
  next();
});

plugins.push(function (next) {
  console.log(2);
  next();
});

// 数组的方式顺序执行
function invokeList() {
  function next() {
    const fn = plugins.shift();
    fn && fn(next);
  }

  next();
}

invokeList();

// promise 执行
function invokePromise() {
  function next() {
    if (plugins.length) {
      const fn = plugins.shift();
      new Promise(function(resolve) {
        fn(resolve)
      }).then(() => next())
    }
  }

  next();
}

invokePromise();


/**
 * @file promise 按顺序输出 
 */

function createPromise(index) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(index);
    }, 100);
  });
}

// 递归
function inorder() {
  const list = [1, 2, 3, 4, 5];

  function loop() {
    const num = list.shift();

    if (num) {
      createPromise(num).then((res) => {
        console.log(res);
        loop();
      });
    }
  }

  loop();
}

// 链式
function inorder() {
  const list = [1, 2, 3, 4, 5];
  const first = list.shift()

  list.reduce((pre, crr) => {
    if (pre && pre.then) {
      return pre.then(res => {
        console.log(res)
        return createPromise(crr)
      })
    }
  }, createPromise(first)).then(res => console.log(res))
}

inorder()
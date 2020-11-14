/**
 * @file promise 中的异常处理
 */

const p1 = new Promise(function (resolve, reject) {
  resolve('success');
});

p1.then((ret) => {
  console.log(haha);
})
  .catch((e) => {
    console.log('#1', e);
    return 'new start';
  })
  .then((ret) => console.log(ret));

// catch 可以捕获链路中的错误
setTimeout(function () {
  const p2 = new Promise(function (resolve, reject) {
    reject('failure');
  })
    .then()
    .catch((e) => {
      console.log('#2', e);
      return 'new start';
    })
    .then((ret) => console.log(ret));
}, 0);

// 因为传入了 reject，catch 无效
setTimeout(function () {
  const p3 = new Promise(function (resolve, reject) {
    reject('failure');
  })
    .then(null, () => {})
    .catch((e) => {
      console.log('#3', e);
      return 'new start';
    })
    .then((ret) => console.log(ret));
}, 0);

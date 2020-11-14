/**
 * @file promise 实现
 */


class Promise {
  constructor(fn) {
    this.state = 'pending';
    this.result = null;
    this.callbacks = [];

    fn(this.resolve.bind(this));
  }

  then(onFullfilled) {
    const that = this;
    return new Promise(function(resolve) {
      that.handle({
        resolve,
        onFullfilled
      });
    });
  }

  resolve(value) {
    if (this.state == 'pending') {
      this.state = 'fullfilled';
      this.result = value;
    }

    this.callbacks.forEach(callback => this.handle(callback));
  }

  handle(callback) {
    if (this.state == 'pending') {
      return this.callbacks.push(callback);
    }

    const ret = callback.onFullfilled(this.result);
    // 返回的是一个 promise
    if (ret?.then) {
      ret.then(value => callback.resolve(value));
    } else {
      callback.resolve(ret);
    }
  }
}

// 对同一个 promise 添加多次
const p1 = new Promise(resolve => resolve(1));
p1.then(ret => console.log(ret));
p1.then(ret => console.log(ret));

// promise 链
const p2 = new Promise(resolve => resolve(2)).then(ret => ret + 1).then(ret => console.log('chiain', ret));

// async 链
const p3 = new Promise(resolve => resolve(2)).then(ret => {
  return new Promise(resolve => resolve(4))
}).then(ret => console.log('async', ret));
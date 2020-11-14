/**
 * @file generator 实现 async await
 *       async await 经过 babel 编译 => generator + run 模式
 */

// 业务逻辑方法
function* logic() {
  try{
    const ret = yield request();
  } catch (e) {
    console.log('捕获内部异常', e);
  }
}

// 异步方法
function request() {
  return Promise.resolve({ code: 0 }).then(ret => {
    throw new Error(ret.code);
  });
}

// 框架提供的运行时方法
function runTask(task) {
  const gen = task();

  function next(value) {
    const ret = gen.next(value)

    if (ret.done) {
      // 这里派发是无法在内部捕获的，因为 logic 已经执行完毕了
      // gen.throw('exception')
      gen = null;
    } else if (ret.value.then) {
      ret.value.then(next).catch(e => gen.throw(e));
    }
  }

  next();
}

runTask(logic);

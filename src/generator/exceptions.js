/**
 * @file 异常捕获总结
 * 约束: promise 不能在 macrotask 中 throw 异常
 *       比如第三方的异步方法中 throw error，但因为不是一个栈，不会影响当前进程执行
 */

function make(flag) {
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve('ok');
        } else {
            reject('error');
        }
    });
}

/** 
 * await 可以直接 try catch
 * 但要保证 promise 异常正确抛出
 */
async function testAction() {
    await make(1);
    await make(0);
}

/**
 * 将 action wrap 起来, 可以使用户无感知
 * 由框架负责统一的异常分发
 */
~async function excute() {
    try {
        await testAction();
    } catch (e) {
        console.log(e);
    }
}();

/**
 * 旧版本的生成器模式, 思路一致
 * promise 保证使用 reject 抛出异常即可
 * example: yog2 必须在 async 里使用 await, 且返回必须是 promise
 */
function* genAction() {
    try {
        yield make(1);
        yield make(0);
    } catch (e) {
        console.log(e);
    }
}

/**
 * 迭代 generator
 * 捕获 promise 异常, 拋回到 generator 中统一处理
 */
function run(gen) {
    const g = gen();

    function next(data) {
        var result = g.next(data);

        if (result.done) {
            return result.value;
        }
        // 执行 promise, 并将后续的 next 传入
        result.value.then(data => next(data)).catch(e => g.throw(e));
    }
    next();
}

run(genAction);
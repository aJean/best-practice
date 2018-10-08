/**
 * @file co promise 实现
 */

function promisefy(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            fn.call(null, ...args, function (ret) {
                ret ? resolve(ret) : reject('error');
            });
        });
    }
}

// 顺序执行 generator
function run(gen) {
    const g = gen();

    function next(data) {
        var result = g.next(data);

        if (result.done) {
            return result.value;
        }
        // 执行 promise, 并将后续的 next 传入
        result.value.then(function (data) {
            next(data);
        });
    }
    next();
}

// 模拟带回掉的异步函数
function readFile(path, fn) {
    setTimeout(function () {
        fn(path);
    }, 1000);
}

const readPromise = promisefy(readFile);

// 用户业务代码
const userProcess = function* () {
    const r1 = yield readPromise(111);
    const r2 = yield readPromise(222);

    console.log(r1 + r2);
}

run(userProcess);

console.log('start process!');
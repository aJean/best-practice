/**
 * @file co thunk 实现
 */

// test
function* read() {
    var content1 = yield 'qs';
    console.log(content1);
    var content2 = yield '9';
    console.log(content2);
    return content2;
}
/*
const it = read();
const a = it.next(22); // 输出 1  a:{value:'qs',done:false}
const b = it.next('hello'); // 输出hello  b:{value:'9',done:false}
const c = it.next('generator'); // 输出generator  c:{value:'generator',done:true}
const d = it.next('123');

console.log(a, b, c, d);
*/

// 把参数替换成唯一 cb
function thunkify(fn) {
    return function (...args) {
        const ctx = this;

        return function (done) {
            // 这里用called是为了标记只执行了一次，类似于promise的resolve和reject只能执行一次一样。
            let called;
            args.push(function () {
                if (called) return;
                called = true;
                // 因为arguments是一个list，必须得用apply才能在done传入。
                done.apply(null, arguments);
            });
            // 这里用个try catch，可以在执行失败时走一遍callback，传入err信息
            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
}

// 负责执行 generator, 直到 done
function run(fn) {
    const gen = fn();

    function next(data) {
        const result = gen.next(data);

        if (result.done) {
            return;
        }

        result.value(next);
    }
    
    next();
}

// 模拟带回掉的异步函数
function readFile(path, fn) {
    setTimeout(function () {
        fn(path);
    }, 1000);
}

const readThunk = thunkify(readFile);

// 用户业务代码
const userProcess = function* () {
    const r1 = yield readThunk(111);
    const r2 = yield readThunk(222);

    console.log(r1 + r2);
}

run(userProcess);
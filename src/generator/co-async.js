/**
 * @file koa2 async-await 模式
 */

const readPromise = function (path) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            path ? resolve(path) : reject('error');
        }, 1000);
    });
}

const userProcess = async function () {
    const r1 = await readPromise(111);
    const r2 = await readPromise(222);

    console.log(r1 + r2);
}

userProcess();
/**
 * @file redux-saga
 *       takeEvery 每次消耗都再重新放入
 *       三层 generator，最内层循环 hold
 */

const ch = function channel() {
    let fn;
    // 保存一个执行方法
    function take(cb) {
        fn = cb;
    }
    // 消耗一个执行方法
    function put(input) {
        fn && fn(input);
    }

    return { put, take };
}();

/**
 * @param worker  next 会循环内层的 take
 */
function* takeEvery(worker) {
    yield fork(function* () {
        // 循环执行, worker -> yield -> put -> worker
        while (true) {
            const action = yield take();
            worker(action);
        }
    });
}

function* mainSaga() {
    yield takeEvery(action => console.log(action.type));
}

function take() {
    return { type: 'take' };
}

/**
 * @param cb 循环的 generator
 */
function fork(cb) {
    return { type: 'fork', fn: cb };
}

// push channel
function runTakeEffect(effect, cb) {
    ch.take(input => cb(input));
}

function runForkEffect(effect, cb) {
    task(effect.fn || effect);
    // cb == next 让之前的 gen 执行完, 释放资源
    // 第一次是 mainSaga
    // 第二次是 takeEvery
    cb();
}

function task(iterator) {
    const iter = typeof iterator === 'function' ? iterator() : iterator;

    function next(args ? ) {
        const result = iter.next(args);
        // while 导致不会走到 done, 所以每次消耗完就会重新 take
        if (!result.done) {
            const effect = result.value;

            // 第一次执行返回是 takeEvery 的 iterator, 再次执行 task 到 fork，就不会再进这个分支了
            if (typeof effect[Symbol.iterator] === 'function') {
                runForkEffect(effect, next);
            } else {
                switch (effect.type) {
                    // 循环执行 take
                    case 'take':
                        runTakeEffect(effect, next);
                        break;
                    // 执行一次 frok.fn, 释放 fork generator
                    case 'fork':
                        runForkEffect(effect, next);
                        break;
                    default:
                }
            }
        }
    }
    next();
}

export default function initSaga() {
    task(mainSaga);

    document.body.addEventListener('click', function (e) {
        ch.put(e);
    });

}
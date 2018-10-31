/**
 * @file redux-saga
 *       channel 作为管道实现两端的通信
 *       put -> take 
 *       takeEvery 每次消耗都再重新放入
 */

const ch = function channel() {
    let fn;
    // 保存一个执行方法
    function take(cb) {
        fn = cb;
    }
    // 消耗一个执行方法
    function put(input) {
        if (fn) {
            fn(input);
        }
    }

    return { put, take };
}();

function* takeEvery(worker) {
    yield fork(function* () {
        while (true) {
            const action = yield take();
            worker(action);
        }
    });
}

function* mainSaga() {
    yield takeEvery(action => {
        console.log(action);
    });
}

function take() {
    return {
        type: 'take'
    };
}

function fork(cb) {
    return {
        type: 'fork',
        fn: cb,
    };
}

// push channel
function runTakeEffect(effect, cb) {
    ch.take(input => cb(input));
}

function runForkEffect(effect, cb) {
    task(effect.fn || effect);
    cb();
}

function task(iterator) {
    const iter = typeof iterator === 'function' ? iterator() : iterator;

    function next(args ? ) {
        const result = iter.next(args);
        // while 导致不会走到 done, 所以每次消耗完就会重新 take
        if (!result.done) {
            const effect = result.value;

            // 判断effect是否是iterator
            if (typeof effect[Symbol.iterator] === 'function') {
                runForkEffect(effect, next);
            } else if (effect.type) {
                switch (effect.type) {
                    case 'take':
                        runTakeEffect(effect, next);
                        break;
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
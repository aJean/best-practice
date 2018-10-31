/**
 * @file redux-saga
 *       channel 作为管道实现两端的通信
 *       put -> take 
 *       takeEvery 每次消耗都再重新放入
 */

const ch = function channel() {
    let fn;

    function take(cb) {
        fn = cb;
    }

    function put(input) {
        if (fn) {
            fn(input);
        }
    }

    return { put, take };
}();

function take() {
    return {
        type: 'take'
    };
}

function* mySaga() {
    const action = yield take();
    console.log(action);
}

/**
 * 将执行函数放入 channel
 * @param {*} effect
 * @param {*} cb task.next
 */
function runTakeEffect(effect, cb) {
    ch.take(input => cb(input));
}

function task(iterator) {
    const it = iterator();

    function next(args ? ) {
        const result = it.next(args);

        if (!result.done) {
            const effect = result.value;

            switch (effect.type) {
                case 'take':
                    return runTakeEffect(result.value, next);
            }
        }
    }

    next();
}

export default function initSaga() {
    task(mySaga);

    document.body.addEventListener('click', function (e) {
        ch.put(e);
    });
}
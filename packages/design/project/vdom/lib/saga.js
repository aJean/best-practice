/**
 * @file redux-saga
 * Communicating sequential processes
 * 通过 channel 将 pull 转化为 push
 * 
 * ovserver vs iterator
 * 
 */

function channel() {
    let taker;

    function take(cb) {
        taker = cb;
    }

    function put(input) {
        // 执行回调
        if (taker) {
            const tempTaker = taker;
            taker = null;
            tempTaker(input);
        }
    }

    return {
        put,
        take,
    };
}

const chan = channel();

// 返回 action
function take() {
    return {
        type: 'take'
    };
}

function* mainSaga() {
    const action = yield take();
    console.log(action);
}

// 设置回调
function runTakeEffect(effect, cb) {
    chan.take(input => {
        cb(input);
    });
}

function task(iterator) {
    const iter = iterator();

    function next(args) {
        const result = iter.next(args);
        if (!result.done) {
            const effect = result.value;
            // 判断 action type
            if (effect.type === 'take') {
                runTakeEffect(result.value, next);
            }
        }
    }
    next();
}

task(mainSaga);

let i = 0;
$btn.addEventListener('click', () => {
    const action = `action data${i++}`;
    chan.put(action);
}, false);
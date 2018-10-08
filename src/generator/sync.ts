function *IT() {
    const y = yield 1;
    console.log(y);
}

const it = IT();

export default {};

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

    return {put, take};
}();

function take() {
    return {
        type: 'take'
    };
}

function fetch() {
    const p = new Promise(function (resolve, reject) {

    });

    p['type'] = 'async';
    return p;
}

function* mySaga() {
    const action = yield take();
    console.log(action);
}

function* asyncSaga() {
    const action = yield fetch();
    console.log(action);
}

// push channel
function runTakeEffect(effect, cb) {
    ch.take(input => cb(input));
}

function runAsyncEffect(effect, cb) {
    effect.then(ret => cb(ret));
}

function task(iterator) {
    const it = iterator();

    function next(args?) {
        const result = it.next(args);

        if (!result.done) {
            const effect =  result.value;

            switch(effect.type) {
                case 'take':
                    return runTakeEffect(result.value, next);
                case 'async':
                    return runAsyncEffect(result, next);
            }
        }
    }

    next();
}

task(mySaga);

document.body.addEventListener('click', function (e) {
    ch.put(e);
});
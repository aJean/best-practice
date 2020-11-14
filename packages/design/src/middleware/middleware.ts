/**
 * @file 中间件模式
 */

const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    const last = funcs[funcs.length - 1];
    const rest = funcs.slice(0, -1);
    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
};

/**
 * function a(next) {return function (action) { return next(action)}
 */
const applyMiddleware = (...middlewares) => {
    let dispatch;

    const store = {
        dispatch: action => console.log(action),
        getState: () => {haha: 1}
    };
    const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
    };
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
        ...store,
        dispatch
    };
};

const Logger = api => next => action => {
    console.log('-------- before ---------');
    next(action);
    console.log('-------- after ---------');
}

const Thunk = api => next => action => {
    if (typeof action == 'function') {
        return action(next);
    }

    next(action);
}

const output = applyMiddleware(Thunk, Logger);

// 异步 action
const asyncAction = text => dispatch => {
    setTimeout(function () {
        console.log('***** ' + text + ' *****');
        dispatch('success');
    }, 100);
};

// output.dispatch('hello');
output.dispatch(asyncAction('load test'));

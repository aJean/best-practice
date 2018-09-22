import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * @file dva like
 * @TODO: 使用 router 管理组件渲染吧
 */

function createReducer(model) {
    const ns = model.ns;
    const reducers = model.reducers;

    return function(state = model.state, action) {
        const type = action.type.replace(`${ns}/`, '');
        const reducer = reducers[type];

        return reducer ? reducer(state) : state;
    };
}

function initReducers(models) {
    const reducers = {};

    models.forEach(model => {
        reducers[model.ns] = createReducer(model);
    });

    return combineReducers(reducers);
}

function initDom(models) {
    return (<main>{models.map(model => <model.component key={Date.now()} />)}</main>);
}

export default class Polymer {
    models = [];

    add(model) {
        this.models.push(model);
    }

    start(el) {
        const sagaMiddleware = createSagaMiddleware();
        const reducers = initReducers(this.models);
        const store = createStore(reducers, applyMiddleware(sagaMiddleware));
        const childrens = initDom(this.models);

        ReactDOM.render(<Provider store={store}>{childrens}</Provider>, el);
    }
}

export * from 'react-redux';
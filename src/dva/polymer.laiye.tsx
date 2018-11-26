import './polymer.laiye.less';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import * as sagaEffects from 'redux-saga/effects';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * @file react redux saga 最佳实践
 */

function createReducer(model, mapTo) {
    const ns = model.ns;
    const reducers = model.reducers;
    const initState = model.state;

    // 执行 action 相关的 reducer, 未定义的返回原始数据
    mapTo[ns] = reducers ? 
        function(state = initState, action) {
            const type = action.type.replace(`${ns}/`, '');
            const reducer = reducers[type];

            return reducer ? reducer(state, action) : state;
        } : 
        function(state = initState) {
            return state;
        };
}

function initReducers(models) {
    const mapTo = {};
    models.forEach(model => createReducer(model, mapTo));

    return combineReducers(mapTo);
}

/**
 * 绑定 sagas, 这里嵌套的 fn 有点多
 */
function initSagas(models) {
    const sagas = [];
    
    models.forEach(model => {
        const ns = model.ns;
        const effects = model.effects;

        if (effects) {
            const keys = Object.keys(effects);
            keys.forEach(key => {
                const fn = effects[key];
                sagas.push(function* () {
                    yield sagaEffects.takeEvery(`${ns}/${key}`, action => fn(action, sagaEffects));
                }());
            });
        }
    });

    return sagas;
}

function initRouter(models) {
    const links = [];
    const routes = [];

    models.forEach((model, i) => {
        routes.push(<Route key={i} path={model.path} component={model.component} />);
        links.push(<Link className="laiye-link" key={i} to={model.path}>{model.name}</Link>);
    });

    return (<Router basename="/reactss/dist/">
        <div className="laiye-routes">
            <nav>{links}</nav>
            {routes}
        </div>
    </Router>);
}

export default class Polymer {
    models = [];

    add(model) {
        this.models.push(model);
    }

    start(el) {
        const sagaMiddleware = createSagaMiddleware();
        const reducers = initReducers(this.models);
        // test reducers
        const store = createStore(reducers, applyMiddleware(sagaMiddleware));
        const sagas = initSagas(this.models);
        const router = initRouter(this.models);
        // listen actions
        sagaMiddleware.run(function *() {
            yield sagaEffects.all(sagas);
        });

        ReactDOM.render(<Provider store={store}>{router}</Provider>, el);
    }
}

export * from 'react-redux';
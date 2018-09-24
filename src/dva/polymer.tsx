import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * @file dva like
 * @TODO: 使用 router 管理组件渲染吧
 */

function createReducer(model, mapTo) {
    const ns = model.ns;
    const reducers = model.reducers;
    const initState = model.state;

    mapTo[ns] = reducers ? 
        function(state = initState, action) {
            const type = action.type.replace(`${ns}/`, '');
            const reducer = reducers[type];

            return reducer ? reducer(state) : state;
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

function initRouter(models) {
    const routes = models.map((model, i) => {
        return (<Route key={i} path={model.path} component={model.component} />);
    });

    return (<Router basename="/reactss/dist/">
        <div className="polymer-routes">
            <nav>
                <Link to='/dva.html'>主页</Link><br/>
                <Link to='/count'>计数器</Link><br/>
                <Link to='/list'>列表测试 saga</Link>
            </nav>
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
        const router = initRouter(this.models);

        ReactDOM.render(<Provider store={store}>{router}</Provider>, el);
    }
}

export * from 'react-redux';
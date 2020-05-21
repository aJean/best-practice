import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import reducer from './reducer';

/**
 * @file store
 */

const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(epicMiddleware);
const store = createStore(reducer, middleware);

epicMiddleware.run(rootEpic);

export default store;

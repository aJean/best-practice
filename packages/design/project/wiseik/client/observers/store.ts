import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as rpromise from 'redux-promise';
import rootReducer from './reducer';

/**
 * @file 识图结果页整体 store
 */

export function configureStore(data) {
    const initState = Object.assign({}, data);
    const createStoreWithMiddleware = applyMiddleware(rpromise)(createStore);
    return createStoreWithMiddleware(rootReducer, initState);
}
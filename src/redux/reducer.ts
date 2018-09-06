import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchFetchData, watchUserData} from './sagas'

/**
 * @file reducers
 */

function listReducer(state = ['hehe'], action) {
    switch (action.type) {
        case 'ADD_LIST':
            return state.concat([action.text]);
        case 'FETCH_DATA_SUCCEEDED':
            return state.concat([action.payload]);
        default:
            return state;
    }
}

function typeReducer(state = 'TYPEone night', action) {
    switch (action.type) {
        case 'CHANGE_TYPE':
            return action.type;
        default:
            return state;
    }
}

function userReducer(state = 'kenzoss', action) {
    switch (action.type) {
        case 'FETCH_USER_SUCCEEDED':
            return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    list: listReducer,
    type: typeReducer,
    user: userReducer
});

const store = createStore(reducers,  applyMiddleware(sagaMiddleware));

// listen action
sagaMiddleware.run(watchFetchData);
sagaMiddleware.run(watchUserData);

export default store;
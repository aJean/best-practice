/**
 * @file reducers
 */

import { createStore, combineReducers } from 'redux';

function listReducer(state = ['hehe'], action) {
    switch (action.type) {
        case 'ADD_LIST':
            return state.concat([action.text]);
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

const reducers = combineReducers({
    list: listReducer,
    type: typeReducer
});

const store = createStore(reducers);

export default store;
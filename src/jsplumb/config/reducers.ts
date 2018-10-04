import { createStore, combineReducers, applyMiddleware } from 'redux';
import { jsPlumb } from 'jsplumb';

/**
 * @file store
 * 负责数据 state 管理
 * 保留全局属性 jsp instance & containment
 */

const initControlsList = [{
    id: 'e1',
    type: 'ENTITY-MESSAGE',
    title: '消息单元',
    top: 200,
    left: 120
}, {
    id: 'e2',
    type: 'ENTITY-MESSAGE',
    title: '消息单元',
    top: 200,
    left: 500
}];

function controlsReducer(state = initControlsList, action) {
    switch (action.type) {
        case 'ADD_CONTROL':
            return state.concat([action.payload]);
        case 'DEL_CONTROL':
            const id = action.payload;
            const list = state.filter(data => data.id != id);

            return list;
        default:
            return state;
    }
}

const reducers = combineReducers({
    controlsList: controlsReducer
});

// @trick 携带两个全局属性
const store: any = createStore(reducers);
store.jsp = jsPlumb.getInstance({
    ConnectionsDetachable: false
});
store.containment = '_canvas';

export default store;
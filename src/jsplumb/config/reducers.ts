import { createStore, combineReducers, applyMiddleware } from 'redux';
import { jsPlumb } from 'jsplumb';
import { initConfig } from './jsplumb.config';

/**
 * @file store
 * 负责数据 state 管理
 * 保留全局属性 jsp instance & containment
 */

const initEntitys = [{
    id: 'e1',
    type: 'ENTITY-MESSAGE',
    title: '消息单元',
    top: 200,
    left: 120,
    options: [{id: 'p1', text: '今天星期几'}, {id: 'p2', text: '明天又是星期几'}]
}, {
    id: 'e2',
    type: 'ENTITY-MESSAGE',
    title: '消息单元',
    top: 200,
    left: 500,
    options: [{id: 'p3', text: '哦哦哦，假期呢'}, {id: 'p4', text: '说好的下雨呢'}]
}];

const initConnections = [{from: 'p1', to: 'e2', order: 0}];

/**
 * 画布实体控制
 */
function entitysReducer(state = initEntitys, action) {
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

/**
 * 实体关联控制
 */
function connectionsReducer(state = initConnections, action) {
    switch (action.type) {
        case 'ADD_CONNECTION':
            return state.concat([action.payload]);
        case 'DEL_CONNECTION':
            return state;
        default:
            return state;
    }
}

const reducers = combineReducers({
    entitys: entitysReducer,
    connections: connectionsReducer
});

// @TODO: 优化这个事件绑定
initConfig.ConnectionOverlays[0][1]['events'].click = function (overlay, originalEvent) {
    store.onOverlayClick(overlay, originalEvent);
}

// trick 携带两个全局属性
const store: any = createStore(reducers);
store.jsp = jsPlumb.getInstance(<any>initConfig);;
store.containment = '_canvas';

export default store;
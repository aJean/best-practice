import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';
import {ICommon, ISimilar} from './interface';

/**
 * @file 识图 reducers
 *       要确保 client 模板 initState 与 server 的默认值一致！！
 */

/**
 * 相似图片 reducer
 */
const similarReducer = handleActions({
    'SIMILAR_GETDATA': (state: any, action) => {
        if (action.error != true) {
            const payload = action.payload;
            const list = payload.result;
            // 必须返回新对象, 否则 handleChange shallowCompare 会 return false
            return {
                all: [...state.all, ...list],
                data: list,
                total: state.total,
                tags: state.tags
            };
        } else {
            return {};
        }
    },

    'SHITU_RESIZE': (state: any, action) => state
}, {});

/**
 * 公共信息 reducer
 */
function commonReducer(state = {}, action) {
    return state;
}

/**
 * 简单 reducer, 无数据变化
 */
function poorReducer(state = {}, action) {
    return state;
}

export default combineReducers({
    'ui_common': commonReducer,
    'ui_similar': similarReducer,
    'ui_caseList': poorReducer,
    'ui_source': poorReducer,
    'ui_same': poorReducer,
    'ui_plant': poorReducer,
    'ui_video': poorReducer,
    'ui_product': poorReducer
});
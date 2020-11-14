import axios from 'axios';
import {createAction} from 'redux-actions';

/**
 * @file resultView actions
 */

export const fetchSimilar = createAction('SIMILAR_GETDATA', url => {
    return axios.get(url).then(result => result.data);
});

// 整体转屏触发页面更新 ?
export const resizeShitu = createAction('SHITU_RESIZE');
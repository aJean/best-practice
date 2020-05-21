import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

/**
 * @file redux-observable reducers
 */

const myReducer = createReducer([]).handleAction('MY_ASYNC_SUCCESS', (state, action) => {
  return [...state, action.payload];
});

// 数据的名字就是 data
export default combineReducers({
  data: myReducer,
});

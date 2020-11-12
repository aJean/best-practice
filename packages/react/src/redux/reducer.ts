import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

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
    // 数据库查询成功
    case 'FETCH_DB_SUCCEEDED':
      return action.payload;
    default:
      return state;
  }
}

function studyReducer(state = {}, action) {
  switch (action.type) {
    case 'TEST_STUDY':
      return { ...action.payload };
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  list: listReducer,
  type: typeReducer,
  user: userReducer,
  study: studyReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// listen action
sagaMiddleware.run(rootSaga);

export default store;

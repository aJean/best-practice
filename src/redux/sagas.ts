import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actions from './actions';

/**
 * @file async effects
 */

function* fetchData(action) {
    try {
        const data = yield call(get, action.payload);
        yield put(actions.fetchDataSucced(data));
    } catch (error) {
        yield put(actions.fetchDataFailed(error));
    }
}

function* fetchUser(action) {
    console.log(action);
    try {
        const data = yield call(get, action.payload);
        yield put(actions.fetchUserSucced(data));
    } catch (error) {
        yield put(actions.fetchUserFailed(error));
    }
}


function* fetchDb(action) {
    try {
        const data = yield call(query, action.payload);
        yield put(actions.fetchDbSucced(data));
    } catch (error) {
        yield put(actions.fetchUDbFailed(error));
    }
}

export function* watchFetchData() {
    yield takeEvery('FETCH_DATA', fetchData);
}

export function* watchUserData() {
    yield takeEvery('FETCH_USER', fetchUser);
}

export function* watchDb() {
    yield takeEvery('FETCH_DB', fetchDb);
}

function get(data) {
    return data.url ? Promise.resolve(Date.now() + 'redux') : Promise.resolve('ajean');
}

function query() {
    return fetch('http://test.baidu.com:4000/test').then(r => r.json());
}


export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchUserData(),
        watchDb()
    ]);
}
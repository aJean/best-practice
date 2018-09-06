import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions';


/**
 * @file async effects
 */

function* fetchData(action) {
    try {
        const data = yield call(fetch, action.payload);
        yield put(actions.fetchDataSucced(data));
    } catch (error) {
        yield put(actions.fetchDataFailed(error));
    }
}

export function* watchFetchData() {
    yield takeEvery('FETCH_DATA', fetchData)
}

function* fetchUser(action) {
    try {
        const data = yield call(fetch, action.payload);
        yield put(actions.fetchUserSucced(data));
    } catch (error) {
        yield put(actions.fetchUserFailed(error));
    }
}

export function* watchUserData() {
    yield takeEvery('FETCH_USER', fetchUser)
}

function fetch(data) {
    return data.url ? Promise.resolve(Date.now() + 'redux') : Promise.resolve('ajean');
}
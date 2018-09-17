import {createAction} from 'redux-actions';

/**
 * @file actions
 */

export const fetchData = createAction('FETCH_DATA');

export const fetchDataSucced = createAction('FETCH_DATA_SUCCEEDED');

export const fetchDataFailed = createAction('FETCH_DATA_FAILED');

export const fetchUser = createAction('FETCH_USER');

export const fetchUserSucced = createAction('FETCH_USER_SUCCEEDED');

export const fetchUserFailed = createAction('FETCH_USER_FAILED');

export const fetchDb = createAction('FETCH_DB');

export const fetchDbSucced = createAction('FETCH_DB_SUCCEEDED');

export const fetchUDbFailed = createAction('FETCH_DB_FAILED');
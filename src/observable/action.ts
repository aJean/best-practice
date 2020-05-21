import { createAction, createAsyncAction } from "typesafe-actions";

/**
 * @file redux-observable actions
 */

export const myAsyncAction = createAsyncAction(
  'MY_ASYNC_REQUEST',
  'MY_ASYNC_SUCCESS',
  'MY_ASYNC_FAILURE'
)<any, any, any>()
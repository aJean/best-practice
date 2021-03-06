import { createAction } from 'redux-actions';

/**
 * @file actions
 */

export const addEntity = createAction('ADD_ENTITY');

export const delEntity = createAction('DEL_ENTITY');

export const addConnection = createAction('ADD_CONNECTION');

export const delConnection = createAction('DEL_CONNECTION');

export const openEditorUI = createAction('OPEN_EDITOR_UI');

export const closeEditorUI = createAction('CLOSE_EDITOR_UI');


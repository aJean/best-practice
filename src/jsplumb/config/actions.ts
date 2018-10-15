import { createAction } from 'redux-actions';

/**
 * @file actions
 */

export const addEntity = createAction('ADD_ENTITY');

export const delEntity = createAction('DEL_ENTITY');

export const addConnection = createAction('ADD_CONNECTION');

export const delConnection = createAction('DEL_CONNECTION');

export const opernEditorUI = createAction('OPEN_EDITOR_UI');

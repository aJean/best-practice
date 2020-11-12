import { ofType, ActionsObservable } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { getType } from 'typesafe-actions';
import { myAsyncAction } from './action';
import { ajax } from 'rxjs/ajax';
import { throwError } from 'rxjs';
import { combineEpics } from 'redux-observable';

/**
 * @file 副作用
 */

export const myEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(getType(myAsyncAction.request)),
    switchMap(() => {
      return ajax.getJSON('https://test.qy.com').pipe(
        map((res) => myAsyncAction.success('hahahahah')),
        catchError((err) => throwError(err))
      );
    })
  );

export default combineEpics(myEpic);

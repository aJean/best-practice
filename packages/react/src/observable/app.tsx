import * as React from 'react';
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";
import store from './store';
import Component from './component';

/**
 * @file redux-observable entry
 */

ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById("app")
);
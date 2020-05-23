import * as React from 'react';
import * as ReactDOM from 'react-dom';
import dva from 'dva';

import Visual from './visual';

/**
 * @file redux-visual entry
 */

const app = dva();

app.model({
  namespace: 'visual',
  state: {
    preparing: false,
    items: [
      { factory: 'Header', name: '头部区域' },
      { factory: 'Header', name: '头部区域2' },
    ],
  },
  reducers: {
    add(state, action) {
      return { preparing: true, items: action.payload.items };
    },

    finish(state, action) {
      return { preparing: false, items: action.payload.items };
    },

    undo(state, action) {
      return { preparing: true, items: action.payload.items };
    }
  },
});

app.router(() => <Visual />);
app.start('#app');

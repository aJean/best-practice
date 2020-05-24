import * as React from 'react';
import dva from 'dva';

import Visual from './visual';

/**
 * @file redux-visual entry
 */

const app = dva();

app.model({
  namespace: 'visual',
  state: {
    // preview scu
    preparing: false,
    // edit item
    edit: null,
    items: [
      { factory: 'Header', name: '头部区域', props: { text: '头部区域1' } },
      { factory: 'Header', name: '头部区域', props: { text: '头部区域2' } },
    ],
  },
  reducers: {
    add(state, action) {
      return { preparing: true, items: action.payload.items, edit: state.edit };
    },

    finish(state, action) {
      return { preparing: false, items: action.payload.items, edit: state.edit };
    },

    undo(state, action) {
      return { preparing: true, items: action.payload.items, edit: state.edit };
    },

    edit(state, action) {
      return { preparing: state.preparing, items: state.items, edit: action.payload.item };
    },

    update(state, action) {
      return { preparing: state.preparing, items: action.payload.items, edit: state.edit };
    },
  },
});

app.router(() => <Visual />);
app.start('#app');

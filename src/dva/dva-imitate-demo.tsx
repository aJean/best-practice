import * as React from 'react';
import Dep from './dva-imitate';

/**
 * @file 使用 dep.js 开发
 */

export const test_dep = (el) => {
  const dep = new Dep({ useRouter: false });

  dep.add({
    ns: 'test',
    data: {
      ui: {
        text: '这是一个按钮'
      },
      list: ['old list 2017', 'old list 2016']
    },
    path: '/test',
    name: '测试渲染',
    component: () => <div>hahahah</div>,
    effects: {
      *add(action, { call, put, delay }) {
        yield delay(1000);
        yield put({ type: 'list/add', payload: action.payload });
      }
    },
    reducers: {
      ui: {
        update: function (state, action) {
          return { text: action.payload };
        }
      },
      list: {
        add: function (state, action) {
          return [...state, action.payload];
        }
      }
    }
  });

  dep.start(el);
};

import Polymer from './polymer.laiye';
import HomePage from './count';
import ListPage from './list';

/**
 * @file 封装 router, redux, saga 工程细节
 */

const app = new Polymer();

app.add({
    ns: 'count',
    state: {
      record : 0,
      current: 0
    },
    path: '/count',
    name: '计数器',
    component: HomePage,
    reducers: {
        add(state) {
            const newCurrent = state.current + 1;
            return { ...state,
                record: newCurrent > state.record ? newCurrent : state.record,
                current: newCurrent
            };
        }
    }
});

app.add({
    ns: 'list',
    state: ['wwwwwwww', 'aaaaaaaaa', 'aaaaaaaaaaa'],
    path: '/list',
    name: '列表测试 saga',
    component: ListPage,
    effects: {
        *add(action, { call, put }) {
            yield call(delay, 1000);
            yield put({ type: 'list/success', data: Date.now() });
        }
    },
    reducers: {
        success: function(state, action) {
            return [...state, 'new' + action.data];
        }
    }
});

function delay(timeout){
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default {
    init(el) {
        app.start(el);
    }
}
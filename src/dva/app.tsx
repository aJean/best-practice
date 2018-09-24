import Polymer from './polymer';
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
    component: ListPage
});

export default {
    init(el) {
        app.start(el);
    }
}
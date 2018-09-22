import Polymer from './polymer';
import HomePage from './count';

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

export default {
    init(el) {
        app.start(el);
    }
}
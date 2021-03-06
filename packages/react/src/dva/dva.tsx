import dva, { connect } from 'dva';
import * as React from 'react';
import createHistory from 'history/createBrowserHistory';

/**
 * @file 封装 router, redux, saga 工程细节
 */

const app = dva({ history: createHistory() });

app.model({
  namespace: 'count',
  state: {
    record: 0,
    current: 0
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state, record: newCurrent > state.record ? newCurrent : state.record, current: newCurrent };
    }
  }
});

function mapStateToProps(state) {
  return { count: state.count };
}

const CountApp = ({ count, dispatch }) => {
  return (
    <div>
      <div>Highest Record: {count.record}</div>
      <div>Current Record: {count.current}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'count/add' });
          }}>
          +
        </button>
      </div>
    </div>
  );
};
const HomePage = connect(mapStateToProps)(CountApp);

app.router(() => <HomePage />);
app.start('#app');

import { Switch, Route, Link } from 'react-router-dom';
import * as React from 'react';

/**
 * @file 异步加载的模块
 */

export default class AsyncComponent extends React.Component {
  render() {
    return <div>
      <h2>异步加载组件</h2>
      <Link to="/async/test">动态子路由</Link>
      <Switch>
        <Route path="/async/test" exact component={() => <div>test</div>} />
      </Switch>
    </div>
  }
}
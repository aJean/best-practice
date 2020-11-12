import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import './router.less';

/**
 * @file 动态路由实现
 */

// 微前端路由实现：主路由 - load 模块 - 子路由

const HomeComponent = () => <div>home page</div>;
const AsyncComponent = React.lazy(() => import(/* webpackChunkName: "async" */ './async'));

export default {
  init(el) {
    ReactDom.render(
      <BrowserRouter basename="/react-best-practice/dist/assets">
        <React.Suspense fallback={<div>Loading...</div>}>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/async'>Async</Link>
          </nav>
          <div className="router-content">
            <Switch>
              <Route path='/' exact component={HomeComponent} />
              <Route path='/async' component={AsyncComponent} />
            </Switch>
          </div>
        </React.Suspense>
      </BrowserRouter>,
      el
    );
  },
};

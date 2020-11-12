import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import * as sagaEffects from 'redux-saga/effects';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as invariant from 'invariant';
import '../../styles/dep.less';

/**
 * @file react redux saga 最佳实践
 *       项目依赖管理 使开发者更关注业务
 *       redux-saga 处理副作用 action，redux 处理同步 action
 *       没有封装 component 还是需要自己 connect
 */

type Model = {
  ns: string;
  path: string;
  name: string;
  data?: Object;
  reducers?: Object;
  effects?: Object;
  component: any;
};

const version = require('../../package.json').version;
const defaultReducer = (state: any, action: Object) => state;

/**
 * @param {string} key 对应 combineReducers 的 key
 */
const createReducer = (key, init, reducers = {}) => (state = init, action) => {
  try {
    const type = action.type.replace(`${key}/`, '');
    const reducer = reducers[key][type];

    return reducer(state, action);
  } catch (e) {
    return state;
  }
};

/**
 * 生成 map ns 和 reducers
 * @example dispatch({type: `${key}/add`, ...})
 */
function initReducers(models: Array<Model>) {
  const mapTo = {};
  let isEmpty = true;

  models.forEach((model) => {
    if (!model.data) {
      return;
    }

    const data = model.data;
    const keys = Object.keys(data);
    isEmpty = false;

    keys.forEach((key) => (mapTo[key] = createReducer(key, data[key], model.reducers)));
  });

  return isEmpty ? defaultReducer : combineReducers(mapTo);
}

/**
 * 监听 sagas
 * @example dispatch({type: `${ns}/add`, ...})
 */
function initSagas(models: Array<Model>) {
  const sagas = [];

  models.forEach((model) => {
    const ns = model.ns;
    const effects = model.effects;

    if (effects) {
      Object.keys(effects).forEach((key) => {
        const saga = (action) => effects[key](action, sagaEffects);
        sagas.push(
          (function* () {
            yield sagaEffects.takeEvery(`${ns}/${key}`, saga);
          })()
        );
      });
    }
  });

  return sagas;
}

/**
 * 组装路由
 */
function initRouter(models, baseUrl) {
  const links = [];
  const routes = [];

  models.forEach((model, i) => {
    routes.push(<Route key={'r_' + i} path={model.path} component={model.component} />);
    links.push(
      <Link key={'l_' + i} to={model.path} className='aiu-link'>
        {model.name}
      </Link>
    );
  });

  return (
    <Router basename={baseUrl}>
      <main className='aiu-routes'>
        <nav>{links}</nav>
        {routes}
      </main>
    </Router>
  );
}

/**
 * 组装根节点
 */
function initRoot(models) {
  return (
    <main>
      {models.map((model, i) => (
        <model.component key={'m_' + i} />
      ))}
    </main>
  );
}

function checkModelProps(model) {
  const requires = ['ns', 'component', 'path', 'name'];
  const lacks = requires.filter((key) => !model.hasOwnProperty(key));

  if (lacks.length) {
    invariant('miss required properties : ' + lacks.join(','));
    return false;
  }

  return true;
}

interface DepOpts {
  useRouter?: boolean;
  baseRouter?: string;
}

export default class Dep {
  models = [];

  frozen = false;

  opts = {
    useRouter: true,
    baseUrl: ''
  };

  constructor(opts?: DepOpts) {
    if (opts) {
      this.opts = Object.assign(this.opts, opts);
    }
  }

  add(model: Model) {
    checkModelProps(model) ? this.models.push(model) : (this.frozen = true);
  }

  start(el: HTMLElement) {
    if (this.frozen) {
      return invariant('model is invalid');
    }

    const models = this.models;
    const opts = this.opts;
    const sagaMiddleware = createSagaMiddleware();
    const reducers = initReducers(models);

    // pick-up reducers
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));
    const sagas = initSagas(models);
    // generator root
    const root = opts.useRouter ? initRouter(models, opts.baseUrl) : initRoot(models);
    // listen actions
    sagaMiddleware.run(function* () {
      yield sagaEffects.all(sagas);
    });

    ReactDOM.render(<Provider store={store}>{root}</Provider>, el);
  }
}

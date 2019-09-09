/**
 * @file mobx 实现
 */

const dependMap: {[key: string]: Array<Function>} = {};
const runtime = {
  handle: Function
};

const dependManager = {
  bind(key, handle) {
    let binds = dependMap[key];

    if (!binds) {
      binds = dependMap[key] = [];
    }

    if (binds.indexOf(handle) === -1) {
      binds.push(handle);
    }
  },

  findKey(key) {
    return dependMap[key];
  },

  trigger(key) {
    const binds = this.findKey(key);
    
    if (binds) {
      binds.forEach(handle => {
        handle();
      });
    }
  },

  beginStrategy(handle) {
    runtime.handle = handle;
  },

  endStrategy() {
    runtime.handle = null;
  }
};

export function observable(): any {
  return function(target, key, des) {
    let value = target[key];

    return {
      /** 绑定 key -> fn 映射 */
      get: function() {
        if (runtime.handle) {
          dependManager.bind(key, runtime.handle)
        }

        return value;
      },

      set: function(newValue) {
        value = newValue;
        dependManager.trigger(key);
      }
    };
  };
}

export function autoRun(fn) {
  dependManager.beginStrategy(fn);
  fn();
  dependManager.endStrategy();
}
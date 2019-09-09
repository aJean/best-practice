import { observable, autoRun } from "./lib";

class Store {
  @observable()
  list = ['hello'];
}

export default {
  init: function(el: HTMLElement) {
    const contentNode = el.querySelector('.content');
    const button = el.querySelector('button');
    
    const store = new Store();
    autoRun(function () {
      contentNode.innerHTML = store.list.join(' 2019 haha !');
    });

    button.addEventListener('click', function () {
      store.list = ['today', 'tomorrow'];
    });
  }
};

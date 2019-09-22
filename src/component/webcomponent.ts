import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

/**
 * @file 
 */

function $(domStr) {
  const node = document.createElement('div');
  node.innerHTML = domStr;

  return <HTMLElement>node.firstChild;
}

class MyTest extends HTMLElement {
  constructor() {
    super();

    const wrapper = $('<div class="test-wrapper"></div>');
    const shadow = this.attachShadow({mode: 'open'});

    wrapper.innerHTML = '<h2>hahaha nihaoa !</h2>';
    shadow.appendChild(wrapper);
  }

  attributeChangedCallback() {
    
  }
}


customElements.define('my-test', MyTest);

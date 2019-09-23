import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import transform from './transformWbc';

/**
 * @file 可以通过联动的方式设置 data
 *       1. attr -> property 通过 setAttribute 触发
 *       2. 直接调用 setProperty 方法
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-test': any;
    }
  }
}

function $(domStr) {
  const node = document.createElement('div');
  node.innerHTML = domStr;

  return <HTMLElement>node.firstChild;
}

const styles = `
  label {
    margin-right: 10px;
    color: green;
  }
}
`;

class MyTest extends HTMLElement {
  static get observedAttributes() {
    return ['data', 'value'];
  }

  constructor() {
    super();

    const wrapper = $('<div class="test-wrapper"></div>');
    const shadow = this.attachShadow({ mode: 'open' });

    wrapper.innerHTML = `<style>${styles}</style><label>改变</label><input type="text" /><div><slot></slot></div>`;
    shadow.appendChild(wrapper);
  }

  data: any;

  connectedCallback() {
    const that = this;
    this.input.addEventListener('input', function(e) {
      that.setAttribute('value', this.value);
    });

    console.log(this.data)
  }

  attributeChangedCallback(name, value, newValue) {
    if (name == 'value') {
      this.shadowRoot.querySelector('label').innerHTML = newValue;
    }

    console.log(this.data)
  }

  get node() {
    return this.shadowRoot.querySelector('.test-wrapper');
  }

  get input() {
    return this.shadowRoot.querySelector('input');
  }

  /**
   * 设置对象属性
   * @param name
   * @param value
   */
  setProperty(name, value) {
    console.log(name, value);
  }
}

customElements.define('my-test', MyTest);

export default transform('my-test');

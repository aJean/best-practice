/**
 * @file web component
 */

export default class Card extends HTMLElement {
  constructor() {
    super();
  }

  setAttribute(...args) {
    console.log(args);
  }

  connectedCallback() {
    const node = document.createElement('img');
    node.src =
      'https://static001.geekbang.org/resource/image/2e/01/2e72e6db44dfe1e35714e79cc5ab9d01.jpg?x-oss-process=image/resize,m_fill,h_190,w_340';

    const container = document.createElement('div');

    this.append(node, container);
  }
}

window.customElements.define('qy-card', Card);
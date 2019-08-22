import * as React from 'react';
import Provider from './provider';
import Consumer from './consumer';

/**
 * @file 处理数据的容器组件
 */

export default class Container extends React.Component<any, any> {
  state = { color: 'blue' };

  /**
   * 处理 props → state
   */
  static getDerivedStateFromProps(props, state) {
    return null;
  }

  clickHandle = () => {
    this.setState({ color: 'red' });
  };

  render() {
    return (
      <Provider>
        <Consumer />
        <div style={{paddingBottom: 10}} onClick={this.clickHandle}>{this.state.color}</div>
      </Provider>
    );
  }
}

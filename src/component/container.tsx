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
    const list = this.props.list;

    return (
      <Provider>
        <Consumer />
        <div style={{paddingBottom: 10}} onClick={this.clickHandle}>{this.state.color}</div>
        <fieldset>
          <legend>item list</legend>
          {list ? list.map((item, i) => <p key={i}>{item}</p>) : null}
        </fieldset>
      </Provider>
    );
  }
}

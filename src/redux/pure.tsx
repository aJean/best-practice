import React from 'react';

/**
 * @file 测试 pure render
 */

export default class PureComponent extends React.PureComponent<any> {
  render() {
    console.log('change')
    return <div>有没有我都无所谓</div>;
  }
}

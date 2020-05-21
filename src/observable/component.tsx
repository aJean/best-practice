import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { myAsyncAction } from './action';

/**
 * @file test epic
 */

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ testMyAsync: myAsyncAction.request }, dispatch),
  };
};

class Component extends React.Component<any, any> {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  clickHandle = () => {
    this.props.testMyAsync();
  };

  render() {
    const { data } = this.props;

    return (
      <div className='redux-observable-main'>
        <h1>测试 redux observable</h1>
        <button onClick={this.clickHandle}>async click</button>
        {data.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);

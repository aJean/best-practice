import React from 'react';
import { compose, withApollo } from 'react-apollo';
import { connect, useDispatch } from 'react-redux';
import * as actions from './actions';
import Container from '../hooks/container';

/**
 * @file withApollo 有没有必要，是否应该自己获取 client
 */

const mapStateToProps = (state) => {
  return { list: state.list, user: state.user, study: state.study };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddList: () => dispatch(actions.fetchData({ url: true })),
    onAddUser: () => dispatch(actions.fetchUser({ user: true })),
    onAddDb: () => dispatch(actions.fetchDb({ server: false })),
    onTestStudy: (data) => dispatch(actions.testStudy(data))
  };
};

// hooks + redux
const Btnf = (props) => {
  const dispatch = useDispatch();
  const clickHandle = function () {
    dispatch(actions.fetchData({ url: true }));
  };

  return <button onClick={clickHandle}>测试 hook item</button>;
};

class List extends React.PureComponent<any, any> {
  componentDidMount() {
    const { onTestStudy } = this.props;

    // 同不执行的 setState 是合并
    onTestStudy({ topic: 1 });
    onTestStudy({ user: 'qy' });
  }

  render() {
    const { user, study } = this.props;
    return (
      <div>
        <Container list={this.props.list} />
        <h1>
          {user}
          {JSON.stringify(study)}
        </h1>
        <Btnf />
        <button onClick={this.props.onAddUser}>添加 user</button>
        <button onClick={this.props.onAddDb}>测试 db</button>
      </div>
    );
  }
}

export default compose(withApollo, connect(mapStateToProps, mapDispatchToProps))(List);

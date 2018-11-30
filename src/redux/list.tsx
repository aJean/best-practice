import { compose, withApollo } from 'react-apollo';
import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getPost } from './request';

/**
 * @file withApollo 有没有必要，是否应该自己获取 context
 */

const mapStateToProps = state => {
    return {list: state.list, user: state.user};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddList: () => dispatch(actions.fetchData({url: true})),
        onAddUser: () => dispatch(actions.fetchUser({user: true})),
        onAddDb: () => dispatch(actions.fetchDb({}))
    };
};

class List extends React.PureComponent<any, any> {
    componentDidMount() {
        getPost(this.props.client, 1).then(res => console.log(res));
    }

    render() {
        const list = this.props.list.map((data, i) => (<div key={i}>大家好今天给大家表演---{data}</div>));
        
        return (
            <div>
                <h1>{this.props.user}翻你的排</h1>
                {list}<br/>
                <button onClick={this.props.onAddList}>添加 item</button>
                <button onClick={this.props.onAddUser}>添加 user</button>
                <button onClick={this.props.onAddDb}>测试 db</button>
            </div>
        );
    }
}

export default compose(withApollo, connect(mapStateToProps, mapDispatchToProps))(List);
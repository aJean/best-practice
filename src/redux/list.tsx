import { compose, withApollo } from 'react-apollo';
import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import * as actions from './actions';
import Container from '../hooks/container';

/**
 * @file withApollo 有没有必要，是否应该自己获取 client
 */

const mapStateToProps = state => {
    return {list: state.list, user: state.user};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddList: () => dispatch(actions.fetchData({url: true})),
        onAddUser: () => dispatch(actions.fetchUser({user: true})),
        onAddDb: () => dispatch(actions.fetchDb({server: false}))
    };
};

// hooks + redux
const Btnf = props => {
    const dispatch = useDispatch();
    const clickHandle = function() {
        dispatch(actions.fetchData({url: true}));
    }
 
    return <button onClick={clickHandle}>测试 hook item</button>
};

class List extends React.PureComponent<any, any> {
    componentDidMount() {
        // getPost(this.props.client, 1).then(res => console.log(res));
    }

    render() {
        return (
            <div>
                <Container list={this.props.list} />
                <h1>{this.props.user}翻你的排</h1>
                <Btnf />
                <button onClick={this.props.onAddUser}>添加 user</button>
                <button onClick={this.props.onAddDb}>测试 db</button>
            </div>
        );
    }
}

export default compose(withApollo, connect(mapStateToProps, mapDispatchToProps))(List);
import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(List);
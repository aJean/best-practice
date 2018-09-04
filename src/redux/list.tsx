import * as React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {list: state.list};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddList: () => dispatch({type: 'ADD_LIST', text: Date.now()})
    }
};

class List extends React.PureComponent<any, any> {
    render() {
        const list = this.props.list.map((data, i) => (<div key={i}>大家好今天给大家表演---{data}</div>));

        return (
            <div>
                {list}<br/>
                <button onClick={this.props.onAddList}>添加 item</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
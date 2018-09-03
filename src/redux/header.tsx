import * as React from 'react';
import connect from './connect';

class Header extends React.PureComponent<any, any> {
    render() {
        return (
            <div style={{color: this.props.color}}>
                hello react <br />
                <button onClick={this.props.handleClick}>change blue</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.header.color,
        text: state.header.text
    }
};


const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => {
            dispatch({type: 'UPDATE_HEADER_COLOR', color: 'blue'});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
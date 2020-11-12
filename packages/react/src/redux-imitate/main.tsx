import * as React from 'react';
import connect from './connect';

class Main extends React.PureComponent<any, any> {
    render() {
        return (
            <div>
                <br />
                <div>主题内容啊 --- {this.props.text}</div>
                <h1>嘻嘻嘻</h1>
                <button onClick={this.props.onSwitch.bind(this, '你瞅啥')}>点我我就跑</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        text: state.content.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSwitch: text => dispatch({type: 'UPDATE_CONTENT_TEXT', text: text})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import * as React from 'react';
import { connect } from 'react-redux';

/**
 * @file 实体编辑效果组件
 */

const mapStateToProps = state => {
    return {
        ui: state.ui
    };
};

class Bounce extends React.Component<any, any> {
    getStyle() {
        return this.props.ui.openEditor ? {display: 'block'} : null;
    }

    render() {
        return (<section className="visual-bounce" style={this.getStyle()}>

        </section>);
    }
}

export default connect(mapStateToProps, null)(Bounce);
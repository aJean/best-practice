import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../config/actions';

/**
 * @file 实体编辑效果组件
 */

const mapStateToProps = state => {
    return {
        ui: state.ui
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCloseEditor: () => dispatch(actions.closeEditorUI())
    };
};

class Bounce extends React.Component<any, any> {
    getStyle() {
        const open = this.props.ui.openEditor;
        const element = this.refs.element;

        if (open) {
            setTimeout(() => {
                element['style'].transform = 'translate3d(0, 0, 0)';
            }, 0);
        } else if (element) {
            element['style'].transform = null;
        }

        return open ? {display: 'block'} : null;
    }

    saveHandle() {
        return this.props.onCloseEditor();
    }

    /**
     * 根据 entity type 切换 form
     */
    appendForm() {
        return null;
    }

    render() {
        return (<section ref="element" className="visual-bounce" style={this.getStyle()}>
            {this.appendForm()}
            <button onClick={this.saveHandle.bind(this)}>save</button>
        </section>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bounce);
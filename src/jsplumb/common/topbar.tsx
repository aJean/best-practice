import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../config/actions';

/**
 * @file 实体顶部工具栏
 */

const mapDispatchToProps = dispatch => {
    return {
        onDelEntity: id => dispatch(actions.delEntity(id)),
        onEditEntity: id => dispatch(actions.opernEditorUI(id))
    };
};

class Topbar extends React.Component<any, any> {
    static defaultProps = {
        id: null,
        icon: './imgs/topbar-icon.png',
        edit: './imgs/topbar-icon-edit.png',
        close: './imgs/topbar-icon-close.png'
    }

    clickHandle() {
        this.props.onDelEntity(this.props.id);
    }

    editHandle() {
        this.props.onEditEntity(this.props.id);
    }

    render() {
        const props = this.props;

        return (<div className="react-entity-topbar">
            <span className="react-entity-topbar-icon react-entity-topbar-sign">
                <img src={props.icon} />
            </span>
            {props.title}
            <span className="react-entity-topbar-icon react-entity-topbar-edit"
                onClick={this.editHandle.bind(this)}>
                <img src={props.edit} />
            </span>
            <span className="react-entity-topbar-icon react-entity-topbar-close"
                onClick={this.clickHandle.bind(this)}>
                <img src={props.close} />
            </span>
        </div>);
    }
}

export default connect(null, mapDispatchToProps)(Topbar);
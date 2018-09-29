import * as React from 'react';

/**
 * @file 实体顶部工具栏
 */

export default class Topbar extends React.Component<any, any> {
    static defaultProps = {
        icon: './imgs/topbar-icon.png',
        edit: './imgs/topbar-icon-edit.png',
        close: './imgs/topbar-icon-close.png'
    }

    render() {
        const props = this.props;

        return (<div className="react-entity-topbar">
            <span className="react-entity-topbar-icon react-entity-topbar-sign">
                <img src={props.icon} />
            </span>
            {props.title}
            <span className="react-entity-topbar-icon react-entity-topbar-edit">
                <img src={props.edit} />
            </span>
            <span className="react-entity-topbar-icon react-entity-topbar-close">
                <img src={props.close} />
            </span>
        </div>);
    }
}
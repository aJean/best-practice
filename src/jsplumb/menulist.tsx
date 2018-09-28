import * as React from 'react';
import * as PropTypes from 'prop-types';

export default class Menulist extends React.Component {

    ondragHandle(type, data) {
        data.nativeEvent.dataTransfer.setData("text/plain", type);
    }

    render() {
        return (<section className="react-controls">
            <div draggable={true} onDragStart={this.ondragHandle.bind(this, 'tigger')}>触发器</div>
            <div draggable={true} onDragStart={this.ondragHandle.bind(this, 'message')}>消息单元</div>
            <div draggable={true} onDragStart={this.ondragHandle.bind(this, 'chat')}>对话单元</div>
            <div draggable={true} onDragStart={this.ondragHandle.bind(this, 'hidden')}>隐藏单元</div>
        </section>);
    }
}


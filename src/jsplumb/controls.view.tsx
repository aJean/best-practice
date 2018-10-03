import * as React from 'react';
import {EntityType} from './config/entity.config';

/**
 * @file 实体选择面板
 */

export default class ControlsView extends React.Component {

    dragHandle(data) {
        const event = data.nativeEvent;
        const type = event.target.getAttribute('data-type');

        event.dataTransfer.setData("text/plain", type);
    }

    /**
     * 点击添加实体, redux action
     */
    clickHandle(data) {
        const event = data.nativeEvent;

        console.log(event)
    }

    render() {
        return (<section className="react-controls">
            <div draggable={true} onDragStart={this.dragHandle} onClick={this.clickHandle} data-type={EntityType.tigger}>触发器</div>
            <div draggable={true} onDragStart={this.dragHandle} onClick={this.clickHandle} data-type={EntityType.ask}>对话单元</div>
            <div draggable={true} onDragStart={this.dragHandle} onClick={this.clickHandle} data-type={EntityType.message}>消息单元</div>
            <div draggable={true} onDragStart={this.dragHandle} onClick={this.clickHandle} data-type={EntityType.chat}>对话单元</div>
            <div draggable={true} onDragStart={this.dragHandle} onClick={this.clickHandle} data-type={EntityType.hidden}>隐藏单元</div>
        </section>);
    }
}


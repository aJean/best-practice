import * as React from 'react';
import * as PropTypes from 'prop-types';
import {getEntity} from './config/entity.config';

/**
 * @file 作为 provider 和 drop 容器
 */

export default class CanvasView extends React.Component<any, any> {
    static propTypes = {
        jsp: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        jsp: PropTypes.object,
        containment: PropTypes.string
    }

    getChildContext() {
        return {
            jsp: this.props.jsp,
            containment: '_canvas'
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }

    /**
     * 根据 controls 类型创建实体
     *
     * @returns
     * @memberof CanvasView
     */
    generateEntity() {
        return this.state.list.map((data, i) => {
            const Entity = getEntity(data.type);
            return <Entity  key={i} {...data} />
        });
    }

    dragoverHandle(data) {
        data.nativeEvent.preventDefault();
        data.nativeEvent.dataTransfer.dropEffect = 'copy';
    }

    dropHandle(data) {
        const event = data.nativeEvent;
        const text = event.dataTransfer.getData('text');
        const list = this.state.list;

        event.preventDefault();
        list.push({
            type: `${text}`,
            title: `${text} 单元`,
            top: event.layerY,
            left: event.layerX
        });

        this.setState({list});
    }

    render() {
        const Entity = getEntity();

        return (
            <div id="_canvas" className="react-canvas" onDrop={this.dropHandle.bind(this)}
                onDragOver={this.dragoverHandle.bind(this)}>
                <Entity title="消息单元" left={120} top={200} />
                <Entity title="消息单元" left={400} top={200} />
                {this.generateEntity()}
            </div>
        );
    }
}
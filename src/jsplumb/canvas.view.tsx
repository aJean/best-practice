import * as React from 'react';
import { getEntity, getEntityId } from './config/entity.config';
import { connect } from 'react-redux';
import store from './config/reducers';
import * as actions from './config/actions';
import { connectConfig, overlays } from './config/jsplumb.config';

/**
 * @file 作为 provider 和 drop 容器
 */

const mapStateToProps = state => {
    return {
        entitys: state.entitys,
        connections: state.connections
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddControl: data => dispatch(actions.addControl(data))
    };
};

class CanvasView extends React.Component<any, any> {
    /**
     * 建立实体关联
     */
    componentDidMount() {
        this.generateConnections();
        this.bindConnections();
    }

    /**
     * 根据 entity 类型创建实体
     */
    generateEntitys() {
        return this.props.entitys.map(data => {
            const Entity = getEntity(data.type);
            // make sure id is unique
            return <Entity  key={data.id} {...data} />
        });
    }

    /**
     * 建立实体关联, order 决定连接方向
     */
    generateConnections() {
        const jsp = store.jsp;

        this.props.connections.forEach(data => {
            const anchors = data.order ? ['Left', 'Right'] : ['Right', 'Left'];
            jsp.connect({source: data.from, target: data.to, anchors, ...connectConfig});
        });
    }

    /**
     * 绑定所有建立关联事件
     */
    bindConnections() {
        const jsp = store.jsp;

        jsp.bind('connection', function (conn, originalEvent) {
            console.log(originalEvent)
        });

        store.onOverlayClick = function (overlay, originalEvent) {
            jsp.deleteConnection(overlay.component);
        }
    }

    /**
     * 确定拖放行为
     */
    dragoverHandle(data) {
        data.nativeEvent.preventDefault();
        data.nativeEvent.dataTransfer.dropEffect = 'copy';
    }

    /**
     * 放置新增实体
     */
    dropHandle(data) {
        const event = data.nativeEvent;
        const text = event.dataTransfer.getData('text');

        event.preventDefault();
        this.props.onAddControl({
            id: getEntityId(),
            type: `${text}`,
            title: `${text} 单元`,
            top: event.layerY,
            left: event.layerX
        });
    }

    render() {
        return (
            <div id="_canvas" className="react-canvas" onDrop={this.dropHandle.bind(this)}
                onDragOver={this.dragoverHandle.bind(this)}>
                {this.generateEntitys()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasView);

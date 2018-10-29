import * as React from 'react';
import store from './config/reducers';
import * as actions from './config/actions';
import { getEntity, getEntityId } from './config/entity.config';
import { connect } from 'react-redux';
import { connectConfig } from './config/jsplumb.config';
import Minimap from './common/minimap';
import Bounce from './common/bounce';

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
        onAddEntity: data => dispatch(actions.addEntity(data)),
        onAddConnection: data => dispatch(actions.addConnection(data)),
        onDelConnection: data => dispatch(actions.delConnection(data))
    };
};

class CanvasView extends React.Component<any, any> {
    state = {
        ready: false
    };

    /**
     * 建立实体关联
     */
    componentDidMount() {
        store.jsp.setContainer('_canvas');

        // trick: 要在绘制之前先设置 container, 但又依赖于 react 组件生命周期触发顺序
        this.setState({ready: true}, () => {
            this.generateConnections();
            this.bindConnections();
        });
    }

    /**
     * 根据 entity 类型创建实体
     */
    generateEntitys() {
        if (!this.state.ready) {
            return null;
        }
        console.log(1)

        return this.props.entitys.map(data => {
            const Entity = getEntity(data.type);
            // make sure id is unique
            return <Entity  key={data.id} {...data} />
        });
    }

    /**
     * 建立实体关联, 使用 uuids， from --> to
     */
    generateConnections() {
        const jsp = store.jsp;

        this.props.connections.forEach(data => {
            jsp.connect({uuids: [data.from, data.to], ...connectConfig});
        });
    }

    /**
     * 绑定所有建立关联事件
     */
    bindConnections() {
        const jsp = store.jsp;
        const props = this.props;
        let timeid;

        // 删除指定关联, 会触发 connectionDetached
        store.onOverlayClick = function (overlay) {
            jsp.deleteConnection(overlay.component);
        };

        // 关联 mouseover
        store.onConnectionOver = function (conn) {
            clearTimeout(timeid);
            if (conn.getOverlays) {
                const overlay = conn.getOverlays()['img-overlay'];
                overlay.setVisible(true);
            }
        };

        // 关联 mouseout
        store.onConnectionOut = function (conn) {
            if (conn.getOverlays) {
                timeid = setTimeout(function () {
                    const overlay = conn.getOverlays()['img-overlay'];
                    overlay.setVisible(false);
                }, 100);
            }
        };

        // overlay mouseout
        store.onOverlayOut = function (overlay) {
            timeid = setTimeout(function () {
                overlay.setVisible(false);
            }, 100);
        };

        // 建立任意关联
        jsp.bind('connection', function (info) {
            info.connection.bind('mouseover', store.onConnectionOver);
            info.connection.bind('mouseout', store.onConnectionOut);

            props.onAddConnection({
                from: info.sourceId,
                to: info.targetId
            });
        });

        // 统一处理 detache 关联, 包括删除实体, 点击 x
        jsp.bind('connectionDetached', function (conn) {
            props.onDelConnection({
                from: conn.sourceId,
                to: conn.targetId
            });
        });
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
        this.props.onAddEntity({
            id: getEntityId(),
            type: `${text}`,
            title: `${text} 单元`,
            top: event.layerY,
            left: event.layerX
        });
    }

    render() {
        return (<section id="_canvasWrap" className="visual-canvas-wrap">
            <Minimap scroll="_canvasWrap" />
            <Bounce />
            <div id="_canvas" className="visual-canvas" onDrop={this.dropHandle.bind(this)}
                onDragOver={this.dragoverHandle.bind(this)}>
                    {this.generateEntitys()}
            </div>
        </section>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasView);

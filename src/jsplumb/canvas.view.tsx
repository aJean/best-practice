import * as React from 'react';
import {getEntity, getEntityId} from './config/entity.config';
import { connect } from 'react-redux';
import * as actions from './config/actions';

/**
 * @file 作为 provider 和 drop 容器
 */

const mapStateToProps = state => {
    return {list: state.controlsList};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddControl: data => dispatch(actions.addControl(data))
    };
};

class CanvasView extends React.Component<any, any> {
    /**
     * 根据 controls 类型创建实体
     *
     * @returns
     * @memberof CanvasView
     */
    generateEntity() {
        return this.props.list.map((data, i) => {
            const Entity = getEntity(data.type);
            // make sure id is unique
            return <Entity  key={data.id} {...data} />
        });
    }

    dragoverHandle(data) {
        data.nativeEvent.preventDefault();
        data.nativeEvent.dataTransfer.dropEffect = 'copy';
    }

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
                {this.generateEntity()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasView);

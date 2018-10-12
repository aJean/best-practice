import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * @file drag zone mini map
 */

const mapData = {
    offsetX: 0,
    offsetY: 0,
    flag: false
};
export default class Minimap extends React.Component {
    static propTypes = {
        top: PropTypes.number,
        left: PropTypes.number
    }

    mouseDownHandle(data) {
        const e = data.nativeEvent;

        mapData.offsetX = e.offsetX;
        mapData.offsetY = e.offsetY;
        mapData.flag = true;
    }

    mouseMoveHandle(data) {
        if (!mapData.flag) {
            return;
        }

        const node: any = this.refs.element;
        const e = data.nativeEvent;

        node.style.left = e.offsetX + 'px';
        node.style.top = e.offsetY + 'px';
    }

    mouseOutHandle() {
        mapData.flag = false;
    }

    render() {
        return (<div className="visual-minimap" onMouseMove={this.mouseMoveHandle.bind(this)}
            onMouseUp={this.mouseOutHandle}>
            <div ref="element" className="visual-minimap-slider" onMouseDown={this.mouseDownHandle}></div>
        </div>);
    }
}
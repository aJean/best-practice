import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * @file drag zone mini map
 * 计算 map 与画布的比例, 来确定移动距离
 * 画布大小改变, map 比例也要改变
 */

const mapData = {
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    flag: false
};

function mid(min, number, max) {
    let ret = number;

    if (number < min) {
        ret =  min;
    }

    if (number > max) {
        ret =  max;
    }

    return ret + 'px';
}
export default class Minimap extends React.Component {
    static propTypes = {
        top: PropTypes.number,
        left: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.mouseMoveHandle = this.mouseMoveHandle.bind(this);
        this.mouseUpHandle = this.mouseUpHandle.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.mouseMoveHandle, false);
        document.addEventListener('mouseup', this.mouseUpHandle, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.mouseMoveHandle);
        document.removeEventListener('mouseup', this.mouseUpHandle);
    }

    mouseDownHandle(data) {
        const e = data.nativeEvent;

        mapData.x = e.clientX;
        mapData.y = e.clientY;
        mapData.flag = true;
    }

    mouseMoveHandle(e) {
        if (!mapData.flag) {
            return;
        }

        const node: any = this.refs.element;
        const disX = e.clientX - mapData.x;
        const disY = e.clientY - mapData.y;
        const left = mid(0, mapData.left + disX, 170);
        const top = mid(0,  mapData.top + disY, 170);

        node.style.left = left;
        node.style.top = top;

        window.scrollTo(disX * 5, disY);
    }

    mouseUpHandle(e) {
        const node: any = this.refs.element;

        mapData.flag = false;
        mapData.left = parseInt(node.style.left);
        mapData.top = parseInt(node.style.top);
    }

    render() {
        return (<div className="visual-minimap">
            <div ref="element" className="visual-minimap-slider"
                onMouseDown={this.mouseDownHandle} onMouseUp={this.mouseUpHandle}></div>
        </div>);
    }
}
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

    return ret;
}

export default class Minimap extends React.Component<any, any> {
    static propTypes = {
        top: PropTypes.number,
        left: PropTypes.number,
        scroll: PropTypes.string
    }

    static defaultProps = {
        mapSize: 150,
        nodeSize: 30,
        limit: 120
    }

    scrollElement: any;
    ratio: number;

    constructor(props) {
        super(props);

        this.mouseMoveHandle = this.mouseMoveHandle.bind(this);
        this.mouseUpHandle = this.mouseUpHandle.bind(this);
    }

    componentDidMount() {
        const props = this.props;
        const element = this.scrollElement = document.getElementById(props.scroll);

        this.ratio = (element.scrollWidth - element.clientWidth) / (props.mapSize - props.nodeSize);
        document.addEventListener('mousemove', this.mouseMoveHandle, false);
        document.addEventListener('mouseup', this.mouseUpHandle, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.mouseMoveHandle);
        document.removeEventListener('mouseup', this.mouseUpHandle);
    }

    createStyle() {
        return {
            width: this.props.mapSize,
            height: this.props.mapSize
        };
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
        const left = mid(0, mapData.left + disX, 120);
        const top = mid(0,  mapData.top + disY, 120);

        node.style.left = left + 'px';
        node.style.top = top + 'px';

        if (this.scrollElement) {
            this.scrollElement.scrollLeft = left * this.ratio;
        }
    }

    mouseUpHandle(e) {
        const node: any = this.refs.element;

        mapData.flag = false;
        mapData.left = parseInt(node.style.left);
        mapData.top = parseInt(node.style.top);
    }

    render() {
        return (<div className="visual-minimap" style={this.createStyle()}>
            <div ref="element" className="visual-minimap-slider"
                onMouseDown={this.mouseDownHandle} onMouseUp={this.mouseUpHandle}></div>
        </div>);
    }
}
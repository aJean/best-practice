/**
 * @file 画布相关配置
 */

// reducer 中才会实现
const NOOP = function (overlay, originalEvent) {};

export const connectorStyle = {
    strokeWidth: 4,
    stroke: '#687c8a'
};

export const hoverStyle = {
    stroke: '#1f77f3'
};

// bind click overlay event
export const overlays = [
    [
        'Custom', { create: function (component) {
            const img = document.createElement('img');
            img.src = './imgs/delete.png';
            return img;
        },
        id: 'img-overlay',
        visible: false,
        events: {
            click: NOOP,
            mouseout: NOOP
        }
    }],
    ['Arrow', { location: 1, width: 8, length: 6 }]
];

// 端点
export const sourceConfig = {
    isSource: true
};

export const targetConfig = {
    isTarget: true
};

// 关联
export const connectConfig = {
    events: {
        mouseover: NOOP,
        mouseout: NOOP
    }
};

// 初始化 jsp 实例配置
export const initConfig = {
    Endpoint: 'Dot',
    EndpointStyle: {
        strokeWidth: 3,
        stroke: '#8e9ca8',
        fill: 'transparent',
        radius: 6,
        lineWidth: 2
    },
    EndpointHoverStyle: hoverStyle,
    Connector: ['Flowchart', {
        stub: [40, 60],
        gap: 5,
        cornerRadius: 5,
        alwaysRespectStubs: true
    }],
    PaintStyle: connectorStyle,
    ConnectionOverlays: overlays,
    HoverPaintStyle: hoverStyle,
    MaxConnections: 1,
    ConnectionsDetachable: false
};
/**
 * @file 画布相关配置
 */

export const connectorStyle = {
    strokeWidth: 4,
    stroke: '#687c8a'
};

export const hoverStyle = {
    stroke: '#1f77f3'
};

export const overlays = [
    ['Label', { label: 'del', id: 'label' }],
    ["Arrow", { location: 1, width: 8, length: 6 }]
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
    
};

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
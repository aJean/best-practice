/**
 * @file 画布相关配置
 */

export const connectorStyle = {
    strokeWidth: 4,
    stroke: '#687c8a'
};

export const connectorHoverStyle = {
    strokeWidth: 4,
    stroke: '#1f77f3'
};

export const endpointConfig = {
    endpoint: 'Dot',
    paintStyle: {
        strokeWidth: 3,
        stroke: '#8e9ca8',
        fill: 'transparent',
        radius: 6,
        lineWidth: 2
    },
    hoverPaintStyle: { stroke: '#1f77f3' },
    isSource: true,
    isTarget: true,
    connector: ['Flowchart', {
        stub: [40, 60],
        gap: 5,
        cornerRadius: 5,
        alwaysRespectStubs: true
    }],
    connectorStyle,
    connectorHoverStyle,
    connectorOverlays: [
        ['Label', { label: 'del', id: 'label' }],
        ["Arrow", { location: 1, width: 8, length: 6 }]
    ],
    maxConnections: 1
};
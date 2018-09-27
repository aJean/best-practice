import * as React from 'react';
import initDrag from './drag';

/**
 * @file 消息对话单元
 */

class Message extends React.Component<any, any> {
    componentDidMount() {
        const jsp = this.props.jsp;
        const endpointOptions = {
            endpoint: 'Rectangle',
            paintStyle: { width: 10, height: 10, fill: '#666', visibility: 'hidden'},
            isSource: true,
            isTarget: true,
            connector: ['Bezier'],
            connectorStyle: { stroke: 'red' },
            connectorOverlays: [
                ['Label', { label: 'delete', id: 'label' }]
            ],
            maxConnections: 1
        };

        jsp.addEndpoint(this.refs.p1, { anchor: 'Right' }, endpointOptions);
        jsp.addEndpoint(this.refs.p1, { anchor: 'Left' }, endpointOptions);
        jsp.addEndpoint(this.refs.p2, { anchor: 'Left' }, endpointOptions);
        jsp.addEndpoint(this.refs.p2, { anchor: 'Right' }, endpointOptions);
    }

    render() {
        const props = this.props;

        return (<section className="react-message">
            <h4>消息对话单元</h4>
            <p ref="p1">测试消息1</p>
            <p ref="p2">测试消息2</p>
        </section>);
    }
}

export default initDrag(Message);
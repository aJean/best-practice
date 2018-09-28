import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * @file 赋予组件端点能力
 */

export const endpointOptions = {
    endpoint: 'Dot',
    paintStyle: { radius: 5, fill: '#fff', outlineStroke: 'blue'},
    isSource: true,
    isTarget: true,
    connector: ['Bezier'],
    connectorStyle: { stroke: 'red' },
    connectorOverlays: [
        ['Label', { label: 'delete', id: 'label' }]
    ],
    maxConnections: 1
};

export default function makeComponentEndpoint(WrappedComponent) {
    return class Endpoint extends React.Component<any, any> {
        root: any;
        
        static contextTypes = {
            jsp: PropTypes.object
        }

        constructor(props) {
            super(props);
            this.root = React.createRef();
        }

        componentDidMount() {
            console.log(this.root)
            const jsp = this.context.jsp;
            const node = this.root.current;

            jsp.addEndpoint(node, { anchor: 'Right' }, endpointOptions);
        }

        render() {
            const props = this.props;

            return (<div ref={this.root} className="react-endpoint">
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
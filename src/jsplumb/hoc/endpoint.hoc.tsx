import * as React from 'react';
import * as PropTypes from 'prop-types';
import {endpointConfig} from '../config/jsplumb.config';

/**
 * @file 赋予组件端点能力
 */

export default function makeComponentEndpoint(WrappedComponent) {
    return class Endpoint extends React.Component<any, any> {
        static contextTypes = {
            jsp: PropTypes.object
        }

        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const jsp = this.context.jsp;
            const node = this.refs.element;

            jsp.addEndpoint(node, { anchor: 'Right' }, endpointConfig);
        }

        render() {
            const props = this.props;

            return (<div ref="element" className="react-endpoint">
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
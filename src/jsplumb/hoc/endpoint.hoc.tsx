import * as React from 'react';
import store from '../config/reducers';
import {endpointConfig} from '../config/jsplumb.config';

/**
 * @file 赋予组件端点能力
 */

export default function makeComponentEndpoint(WrappedComponent) {
    return class Endpoint extends React.Component<any, any> {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.addEndpoint(node, { anchor: 'Right' }, endpointConfig);
        }

        componentWillUnmount() {
            
        }

        render() {
            const props = this.props;

            return (<div ref="element" className="react-endpoint">
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
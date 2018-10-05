import * as React from 'react';
import store from '../config/reducers';
import {sourceConfig} from '../config/jsplumb.config';
import {getOptionId} from '../config/option.config';

/**
 * @file 赋予组件端点能力
 */

export default function makeComponentEndpoint(WrappedComponent) {
    return class Endpoint extends React.Component<any, any> {

        componentDidMount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.addEndpoint(node, { anchor: 'Right' }, sourceConfig);
        }

        componentWillUnmount() {

        }

        render() {
            const props = this.props;
            const id = props.id || getOptionId();

            return (<div id={id} ref="element" className="react-endpoint">
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
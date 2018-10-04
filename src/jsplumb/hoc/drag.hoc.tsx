import * as React from 'react';
import store from '../config/reducers';
import {endpointConfig} from '../config/jsplumb.config';

/**
 * @file 赋予组件拖动能力
 */

export default function makeDragComponent(WrappedComponent) {
    return class Draggable extends React.Component<any, any> {
        componentDidMount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.draggable(node, {containment: store.containment});
            jsp.addEndpoint(node, {anchor: 'Left'}, endpointConfig);
        }
        
        render() {
            const jsp = this.context.jsp;
            const props = this.props;
            const style = {left: props.left, top: props.top};

            return (<div ref="element" className="react-entity-wrap" style={style}>
                <WrappedComponent jsp={jsp} {...props} />
            </div>);
        }
    }
}
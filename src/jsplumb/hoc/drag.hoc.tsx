import * as React from 'react';
import store from '../config/reducers';
import {targetConfig} from '../config/jsplumb.config';

/**
 * @file 赋予组件拖动能力
 */

export default function makeDragComponent(WrappedComponent) {
    return class Draggable extends React.Component<any, any> {
        
        componentDidMount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.draggable(node, {containment: store.containment});
            jsp.addEndpoint(node, {anchor: 'Left'}, targetConfig);
        }

        componentWillUnmount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.empty(node);
            jsp.removeAllEndpoints(node);
        }
        
        render() {
            const props = this.props;
            const style = {left: props.left, top: props.top};

            return (<div id={props.id} ref="element" className="react-entity-wrap" style={style}>
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
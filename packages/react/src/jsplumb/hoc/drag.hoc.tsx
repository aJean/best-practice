import * as React from 'react';
import store from '../config/reducers';
import {initConfig, targetConfig} from '../config/jsplumb.config';

/**
 * @file 赋予组件拖动能力
 * 要保证 endpoint svg uuid 与 组件 id 一致
 */

export default function makeDragComponent(WrappedComponent) {
    return class Draggable extends React.Component<any, any> {
        componentDidMount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.draggable(node, { containment: store.containment });
            jsp.addEndpoint(node, { anchor: 'Left', uuid: this.props.id }, targetConfig);
        }

        componentWillUnmount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            node && jsp.removeAllEndpoints(node);
        }

        handleClick() {
            const jsp: any = store.jsp;
            const node = this.refs.element;
            
            jsp.select({ target: this.props.id }).each(function (connection) {
                connection.setPaintStyle({ stroke: "red",  strokeWidth: 4,});
                jsp.revalidate(node);
            });

            console.log('repaint');

            jsp.repaintEverything();
        }
        
        render() {
            const props = this.props;
            const style = {left: props.left, top: props.top};

            return (<div id={props.id} ref="element" className="react-entity-wrap" style={style}
                onClick={this.handleClick.bind(this)}>
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
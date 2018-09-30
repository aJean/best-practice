import * as React from 'react';
import * as PropTypes from 'prop-types';
import {endpointConfig} from '../config/jsplumb.config';

/**
 * @file 赋予组件拖动能力
 */

export default function makeDragComponent(WrappedComponent) {
    return class Draggable extends React.Component<any, any> {
        root: any;
        
        static contextTypes = {
            jsp: PropTypes.object
        }

        constructor(props) {
            super(props);
            this.root = React.createRef();
        }

        componentDidMount() {
            const jsp = this.context.jsp;
            const node = this.root.current;

            jsp.draggable(node);
            jsp.addEndpoint(node, { anchor: 'Left' }, endpointConfig);
        }
        
        render() {
            const jsp = this.context.jsp;
            const props = this.props;
            const style = {left: props.left, top: props.top};

            return (<div ref={this.root} className="react-entity-wrap" style={style}>
                <WrappedComponent jsp={jsp} {...props} />
            </div>);
        }
    }
}
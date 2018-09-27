import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * @file
 */

export default function makeComponentDrag(WrappedComponent) {
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
            jsp.addEndpoint(node, { anchor: 'Right', endpoint: 'Blank' });
        }
        
        render() {
            const jsp = this.context.jsp;
            const props = this.props;
            const style = {left: props.left};

            return (<div ref={this.root} className="react-drag" style={style}>
                <WrappedComponent jsp={jsp} {...props} />
            </div>);
        }
    }
}
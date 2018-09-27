import * as React from 'react';
import * as PropTypes from 'prop-types';

export default class App extends React.Component<any, any> {
    static propTypes = {
        jsp: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        jsp: PropTypes.object
    }

    getChildContext() {
        return {
            jsp: this.props.jsp
        };
    }

    render() {
        return (
            <div className="react-canvas">{this.props.children}</div>
        );
    }
}
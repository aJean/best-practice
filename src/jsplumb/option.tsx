import * as React from 'react';
import makeEndpointComponent from './hoc/endpoint.hoc';

const style = {
    margin: 0,
    padding: 5,
    minWidth: 120,
    color: '#1e7bd3',
    textAlign: 'center' as any
};

class Option extends React.Component<any, any> {
    render() {
        return (<div className="react-option" style={style}>{this.props.text}</div>)
    }
}

export default makeEndpointComponent(Option);
import * as React from 'react';
import makeEndpointComponent from './hoc/endpoint.hoc';

class Option extends React.Component<any, any> {
    static defaultProps = {
        icon: './imgs/option-icon.png'
    }

    render() {
        const props = this.props;

        return (<div className="react-option">
            <span className="react-entity-option-icon">
                <img src={props.icon} />
            </span>
            {props.text}
        </div>)
    }
}

export default makeEndpointComponent(Option);
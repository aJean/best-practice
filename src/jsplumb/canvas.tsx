import * as React from 'react';
import * as PropTypes from 'prop-types';
import Msgcell from './msg.cell';
import Askell from './ask.cell';

/**
 * @file 作为 provider 和 drop 容器
 */

export default class Canvas extends React.Component<any, any> {
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

    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }

    generateCell() {
        return this.state.list.map((data, i) => <Askell key={i} {...data} />);
    }

    ondragoverHandle(data) {
        data.nativeEvent.preventDefault();
        data.nativeEvent.dataTransfer.dropEffect = 'copy';
    }

    ondropHandle(data) {
        const event = data.nativeEvent;
        const text = event.dataTransfer.getData('text');
        const list = this.state.list;

        event.preventDefault();
        list.push({
            title: `${text} - 单元`,
            top: event.layerY,
            left: event.layerX
        });

        this.setState({list});
    }

    render() {
        return (
            <div className="react-canvas" onDrop={this.ondropHandle.bind(this)} onDragOver={this.ondragoverHandle.bind(this)}>
                {this.props.children}
                <Msgcell left={120} />
                <Msgcell left={400} />
                {this.generateCell()}
            </div>
        );
    }
}
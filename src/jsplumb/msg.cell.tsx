import * as React from 'react';
import makeDragComponent from './hoc/drag.hoc';
import Option from './option';

/**
 * @file 消息对话单元
 */

class Msgcell extends React.Component<any, any> {
    componentDidMount() {
        const jsp = this.props.jsp;
    }

    render() {
        const props = this.props;

        return (<section className="react-message">
            <h4>消息对话单元</h4>
            <Option text="测试消息1" />
            <Option text="测试消息2" />
        </section>);
    }
}

export default makeDragComponent(Msgcell);
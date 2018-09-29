import * as React from 'react';
import makeDragComponent from './hoc/drag.hoc';
import Option from './option';
import Topbar from './common/topbar';

/**
 * @file 消息对话单元
 */

class Msgcell extends React.Component<any, any> {
    componentDidMount() {
        const jsp = this.props.jsp;
    }

    render() {
        const props = this.props;

        return (<section className="react-entity">
            <Topbar {...props} />
            <div className="react-entity-words">
                <span className="react-entity-light">员工类型</span>你想请什么样的假?
            </div>
            <Option text="测试消息1" />
            <Option text="测试消息2" />
        </section>);
    }
}

export default makeDragComponent(Msgcell);
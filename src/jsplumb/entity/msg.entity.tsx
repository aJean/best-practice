import * as React from 'react';
import makeDragComponent from '../hoc/drag.hoc';
import Lamma from '../common/lemma';
import Option from '../common/option';
import Topbar from '../common/topbar';

/**
 * @file 消息对话单元
 */

class MsgEntity extends React.Component<any, any> {
    render() {
        const props = this.props;

        return (<section className="react-entity">
            <Topbar {...props} />
            <Lamma word="员工类型" text="你想请什么样的假?" />
            <Option text="测试消息1" />
            <Option text="测试消息2" />
        </section>);
    }
}

export default makeDragComponent(MsgEntity);
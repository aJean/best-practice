import * as React from 'react';
import makeDragComponent from '../hoc/drag.hoc';
import Lamma from '../common/lemma';
import Option from '../common/option';
import Topbar from '../common/topbar';

/**
 * @file 消息对话单元
 */

class MsgEntity extends React.Component<any, any> {
    generateOptions() {
        const options = this.props.options;

        return options ? this.props.options.map(data => <Option id={data.id} key={data.id} text={data.text} />)
            : null;
    }

    render() {
        const props = this.props;

        return (<section className="react-entity">
            <Topbar {...props} />
            <Lamma word="员工类型" text="你想请什么样的假?" />
            {this.generateOptions()}
        </section>);
    }
}

export default makeDragComponent(MsgEntity);
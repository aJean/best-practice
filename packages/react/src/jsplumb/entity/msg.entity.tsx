import * as React from 'react';
import makeDragComponent from '../hoc/drag.hoc';
import Entity from './entity';
import Lamma from '../common/lemma';
import Topbar from '../common/topbar';

/**
 * @file 消息对话单元
 */

class MsgEntity extends Entity {
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
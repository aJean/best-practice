import * as React from 'react';
import makeComponentDrag from '../hoc/drag.hoc';
import Option from '../common/option';
import Topbar from '../common/topbar';

/**
 * @file 问题单元
 */

class AskEntity extends React.Component<any, any> {
    render() {
        const props = this.props;

        return (<section className="react-entity">
            <Topbar {...props} />
            <Option text="拖拽添加组件测试" />
        </section>);
    }
}

export default makeComponentDrag(AskEntity);
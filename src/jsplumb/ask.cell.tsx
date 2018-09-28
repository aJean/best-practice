import * as React from 'react';
import makeComponentDrag from './hoc/drag.hoc';
import Option from './option';

/**
 * @file 问题单元
 */

class Askcell extends React.Component<any, any> {
    render() {
        const props = this.props;

        return (<section className="react-cell">
            <h4>{props.title}</h4>
            <Option text="拖拽添加组件测试" />
        </section>);
    }
}

export default makeComponentDrag(Askcell);
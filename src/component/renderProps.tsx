import * as React from 'react';
import * as PropTypes from 'prop-types'

/**]
 * @file 负责控制逻辑，直接渲染传入子组件
 */

export default class RenderProps extends React.Component<any, any> {
    state = {
        show: false
    }

    render() {
        return <section style={{border: '1px solid #0e5cc1'}}>
            <h4>render props</h4>
            {this.props.render(this.state)}
        </section>
    }
}
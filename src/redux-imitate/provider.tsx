import * as React from 'react'
import * as PropTypes from 'prop-types'

/**
 * @file  提取 context 注入给子组件
 */

export default class Provider extends React.Component<any, any> {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext () {
        return {
            store: this.props.store
        };
    }

    render () {
        return (
            <div>{this.props.children}</div>
        );
    }
}
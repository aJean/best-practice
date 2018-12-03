import * as React from 'react';

/**
 * @file 高阶组件使用
 */

const withRef = Wrap => {
    return class Component extends React.Component {
        wrap: any
        
        render() {
            return <section className="react-hoc">
                <Wrap ref={instance => this.wrap = instance} />
            </section>
        }
    }
}
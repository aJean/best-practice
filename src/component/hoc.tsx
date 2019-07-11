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
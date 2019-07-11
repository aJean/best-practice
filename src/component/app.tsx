import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyInput, {Fc} from './usestate';
import MyProvider from './usereducer';

/**
 * @file context 管理
 */

class App extends React.Component {
  state = {
    content: 'function component'
  }

  clickHandle = event => {
    const text = 'function component'

    this.setState({
      content: text + ' 112358'
    })
  }

  render() {
    return <main>
      <button onClick={this.clickHandle}>改变 function component</button>
      <MyInput />
      <Fc content={this.state.content} />
      <MyProvider />
    </main>
  }
}

export default {
  init(el) {
    ReactDOM.render(<App />, el);
  }
}

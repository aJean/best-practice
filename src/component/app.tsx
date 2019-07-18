import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyInput from './usestate';
import MyProvider from './usereducer';

/**
 * @file react hooks demo
 */

class App extends React.Component {
  render() {
    return <main>
      <MyInput />
      <MyProvider />
    </main>
  }
}

export default {
  init(el) {
    ReactDOM.render(<App />, el);
  }
}

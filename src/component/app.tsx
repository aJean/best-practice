import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyInput from './usestate';
import MyProvider from './usereducer';
import MyWBC from './webcomponent';

/**
 * @file react hooks demo
 */

class App extends React.Component {
  render() {
    return (
      <main>
        <MyInput />
        <MyProvider />
        <fieldset>
          <legend style={{ color: 'red' }}>web component test</legend>
          <MyWBC id="c1" data={{ name: 'wbc' }}><h2>state</h2></MyWBC>
        </fieldset>
      </main>
    );
  }
}

export default {
  init(el) {
    ReactDOM.render(<App />, el);
  }
};

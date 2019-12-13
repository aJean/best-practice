import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyInput from './usestate';
import MyProvider from './usereducer';
import MyWBC from './webcomponent';

/**
 * @file react hooks demo
 */

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

class App extends React.Component {
  render() {
    return (
      <main>
        <MyInput />
        <MyProvider />
        <fieldset>
          <legend style={{ color: 'red' }}>web component test</legend>
          <MyWBC id='c1' data={{ name: 'wbc' }}>
            <h2>state</h2>
          </MyWBC>
          <Counter />
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

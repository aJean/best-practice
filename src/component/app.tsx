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
  // ref 可以通过引用的属性值来打破 capture 规则
  const myRef = React.useRef(count);

  // 捕获上一次的 state 与 props、变量，就是函数闭包的效果
  React.useEffect(() => {
    const id = setInterval(() => {
      // count 一直是 0
      setCount(count + 1);
      // 可以使用 setCount(c => c + 1)
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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyInput from './usestate';
import MyProvider from './usereducer';
import MyWBC from './wbc';

/**
 * @file react hooks demo
 */

function Counter() {
  const [count, setCount] = React.useState(0);
  // ref 可以通过引用的属性值来打破 capture 规则
  // const myRef = React.useRef(count);

  // 捕获上一次的 state 与 props、变量，就是函数闭包的效果
  React.useEffect(() => {
    const id = setInterval(() => {
      // count 一直是 0
      setCount(count + 1);
      // 可以使用 setCount(c => c + 1)
    }, 1000);
    return () => clearInterval(id);
  // 传入 [] 让这个 useEffect 只执行一次
  }, []);

  // 这个会执行两次，第 2 次就是 count = 1 的时候
  React.useEffect(() => {
    console.log(222)
  }, [count]);

  return <h1>{count}</h1>;
}

class App extends React.Component {
  render() {
    return (
      <main>
        <MyInput />
        <MyProvider />
          <MyWBC id='c1' data={{ name: 'wbc' }} slots={<button>hahah</button>}>
            <h2>state</h2>
            <Counter />
          </MyWBC>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));

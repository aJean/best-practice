import * as React from 'react';

/**
 * @file useMemo 减少 expensive function call
 *       useCallback 防止 function 生成多次
 */

export default function MyInput (props) {
  const [name, setName] = React.useState('first');
  const [count, setCount] = React.useState(0);

  const nameHandle = function (event) {
    setName(event.target.value);
  };

  // 避免 count 变化导致 makName 执行，返回的是缓存值
  // 性能优化点：这里匿名 fun 每次都会创建，但如果 name 不变，则不会执行
  const makeName = React.useMemo(function () {
    console.log('parent name change');
    return name + '-bibibi';
  }, [name]);

  // 避免每次都生成新的 fun，导致 Inner 的 memo 失效
  const countHandle = React.useCallback(function (event) {
    setCount(count + 1)
  }, [name])
  
  const childFun = function () {}

  return <fieldset className="func-state">
    <legend>测试 useState</legend>
    <p><input type="text" onChange={nameHandle} /> <span>{makeName}</span></p>
    <p><button onClick={countHandle}>change count</button>
    <span>{count}</span></p>
    <Inner cb={childFun} />
  </fieldset>
}

// props 不变，不会执行多次
export const Inner = React.memo((props: any) => {
  console.log('child name change');

  return <div className="footer">
    <h2>{props.content}</h2>
  </div>
})
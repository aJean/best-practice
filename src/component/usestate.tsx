import * as React from 'react';

/**
 * @file useMemo 减少 expensive function call
 */

export default function MyInput (props) {
  const [name, setName] = React.useState('nba');
  const [count, setCount] = React.useState(0);

  const nameHandle = function (event) {
    setName(event.target.value);
  };

  const makeName = React.useMemo(function () {
    console.log('name change');
    return name + '-bibibi';
  }, [name]);

  const countHandle = function (event) {
    setCount(event.timeStamp)
  }

  return <fieldset className="func-state">
    <legend>测试 useState</legend>
    <p><input type="text" onChange={nameHandle} />
    <span>{makeName}</span></p>
    <p><button onClick={countHandle}>change count</button>
    <span>{count}</span></p>
  </fieldset>
}

export const Fc = React.memo((props: any) => {
  console.log('function change')

  return <div className="footer">
    <h2>{props.content}</h2>
  </div>
})
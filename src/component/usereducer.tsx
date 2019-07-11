import * as React from 'react';

/**
 * @file redux
 */

const MyContext = React.createContext({list: null, dispatch: null})

function MyReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, 'new']
    default:
      return state
  }
}

export default function MyProvider() {
  const [list, dispatch] = React.useReducer(MyReducer, ['first', 'second'])
  
  return <MyContext.Provider value={{list, dispatch}}>
    <MyBar />
    <MyList />
  </MyContext.Provider>
}

function MyList(props) {
  const { list, dispatch } = React.useContext(MyContext);

  function addHandle() {
    dispatch({type: 'add'})
  }

  return <fieldset className="func-reducer">
    <legend>测试 context</legend>
    <button onClick={addHandle}>add item</button>
    {list.map(text => <p>{text}</p>)}
  </fieldset>
}

// 避免多次执行
const MyBar = React.memo((props) => {
  console.log('bar !!!')
  return <div className="func-bar">context child bar</div>
})
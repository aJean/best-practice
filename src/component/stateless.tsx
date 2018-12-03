import * as React from 'react';
import Context from './context';

/**
 * @file 无状态组件
 */

const Stateless = props => 
    <Context.Consumer>
        {data => <div style={{border: '1px solid red', marginTop: '10px'}}>{data.author + props.text}</div>}
    </Context.Consumer>;

export default Stateless;
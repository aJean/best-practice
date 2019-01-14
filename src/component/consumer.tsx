import * as React from 'react';
import { MyContext } from './provider';

/**
 * @file 无状态组件
 */

const Stateless = props => {
    
    return <MyContext.Consumer>
        {({data, selectChanged}) => <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <input type="text" onChange={selectChanged} style={{display: 'block'}}/>
            { data ? <ul>
                <li>{data.name}</li>
                <li>{data.alter_ego}</li>
                <li>{data.first_appearance}</li>
            </ul> : null }
        </div>}
    </MyContext.Consumer>;
}

export default Stateless;
import * as React from 'react';
import Stateless from './stateless';
import {createPortal} from 'react-dom';
import Context from './context';

/**
 * @file 处理数据的容器组件
 */

export default class Container extends React.Component<any, any> {
    state = {};

    static getDerivedStateFromProps(props) {
        return null;
    }

    render() {
        const list = this.props.list;
        return createPortal(<Context.Provider value={{author: 'ajean'}}>
            <section>{list.map((data, i) => <Stateless key={i} text={data} />)}</section>
        </Context.Provider>, document.body);
    }
}
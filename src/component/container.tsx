import * as React from 'react';
import Provider from './provider';
import Consumer from './consumer';

/**
 * @file 处理数据的容器组件
 */

export default class Container extends React.Component<any, any> {
    state = {};

    static getDerivedStateFromProps(props) {
        return null;
    }

    render() {
        return <Provider><Consumer /></Provider>;
    }
}
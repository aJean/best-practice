import * as React from 'react';
import Option from '../common/option';

/**
 * @file 实体公共类
 */

export default class Entity extends React.Component<any, any> {
    generateOptions() {
        const options = this.props.options;

        return options ? this.props.options.map(data => 
            <Option id={data.id} key={data.id} text={data.text} />)
            : null;
    }

    render() {
        return null;
    }
}
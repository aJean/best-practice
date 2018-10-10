import * as React from 'react';
import store from '../config/reducers';
import {sourceConfig} from '../config/jsplumb.config';
import {getOptionId} from '../config/option.config';

/**
 * @file 赋予组件端点能力
 * 要保证 endpoint svg uuid 与 组件 id 一致
 * id 应该是创建 relation 时生成
 */

export default function makeComponentEndpoint(WrappedComponent) {
    return class Endpoint extends React.Component<any, any> {
        id: any;

        componentDidMount() {
            const jsp: any = store.jsp;
            const node = this.refs.element;

            jsp.addEndpoint(node, {
                anchor: 'Right',
                uuid: this.id
            }, sourceConfig);
        }

        componentWillUnmount() {
            // 只有删除 entity 才会删除 endpoint
        }

        findEp() {
            const jsp: any = store.jsp;
            const node = this.refs.element;
            console.log(node)
            return jsp.getEndpoints(node)[0];
        }

        onMouseOver() {
            this.findEp().fire('mouseover');
            this.refs.element['style'].background = '#e7f3ff';
        }

        onMouseOut() {
            this.findEp().fire('mouseout');
            this.refs.element['style'].background = 'none';
        }

        render() {
            const props = this.props;
            const id = this.id = props.id || getOptionId();

            return (<div id={id} ref="element" className="react-endpoint"
                onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
                <WrappedComponent {...props} />
            </div>);
        }
    }
}
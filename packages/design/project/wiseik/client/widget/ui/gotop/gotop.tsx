/// <reference path="../../../node_modules/@types/zepto/index.d.ts"/>
/// <reference path="../../global.d.ts"/>

import * as React from 'react';
import {IBaseProps, IBaseState} from '../../../observers/interface';

/**
 * @file 返回顶部组件
 */

class Gotop extends React.Component <IBaseProps, IBaseState> {
    state = {
        show: false
    }

    componentDidMount() {
        const that = this;
        let timeId;
        
        $(window).on('scroll.gotop', function () {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                that.setState({show: window.pageYOffset > 40 ? true : false});
            });
        });
    }

    componentWillUnmount() {
        $(window).off('scroll.gotop');
    }

    clickHandle() {
        window.scrollTo(0, 0);
        NsLog.sendLog({
            etype: 'click',
            pos: 'gotop'
        });
    }

    render() {
        return (<section className={this.state.show ? "shitugotop"
            : "shitugotop-hide"} onClick={this.clickHandle}>
            <i className="img-icon">&#xe621;</i>
        </section>);
    }
}

export default Gotop;

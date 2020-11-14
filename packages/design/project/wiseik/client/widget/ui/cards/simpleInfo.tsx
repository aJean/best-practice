import * as React from 'react';
import {ICommon, IBaseState} from '../../../observers/interface';

/**
 * @file 个人信息 + 相同卡片
 */

class SimpleInfo extends React.Component<ICommon, IBaseState> {

    render() {
        const props = this.props;

        return (<section className="shituinfo">
            <div className="shituinfo-main">
                <div className="shituinfo-img">
                    <img src={props.thumbImageUrl}/>
                    <span>手动框选</span>
                </div>
                <div className="shituinfo-info">
                    <div className="shituinfo-tip shituinfo-noresult">
                        {props['noMsg']}
                    </div>
                </div>
            </div>
        </section>);
    }
}

export default SimpleInfo;
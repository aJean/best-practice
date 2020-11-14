import * as React from 'react';
import {IInfoCard, IBaseState} from '../../../observers/interface';

/**
 * @file 个人信息 + 相同卡片
 */

class InfoCard extends React.Component<IInfoCard, IBaseState> {
    /**
     * info 内容主体
     */
    createList() {
        const info = this.props.info;
        const total = this.props.total;
        const desc = info.desc;
        const ret = [];

        // 详情
        if (desc) {
            const url = info.redirectUrl + '&page=duturesult&mod=info&url='
                + encodeURIComponent(desc['gpg']);

            ret.push(<a key="0" href={url} className="shituinfo-link">
                <span>{desc['cont']}</span>
                <em>查看详情<i className="img-icon">&#xe614;</i></em>
            </a>);
        }
        // 相同卡片
        if (total > 2) {
            ret.push(<a key="1" href="javascript:;" className="shitucard-same shitucard-samebtn">
                <p>为您找到<strong>{total}</strong>张其它尺寸图片</p>
                <span>查看更多</span>
                <i className="img-icon">&#xe614;</i>
            </a>);
        } else {
            ret.push(<div key="1" className="shituinfo-tip">
                若对结果不满意，您可以：<br/>
                <span className="shituinfo-recamera">重新拍照</span>
                <span className="shituinfo-noresult">重新框选</span>
                <span className="shituinfo-descbtn">描述图片</span>
            </div>);
        }
        
        return ret;
    }

    render() {
        const info = this.props.info;

        return (<section className="shituinfo">
            <div className="shituinfo-main">
                <div className="shituinfo-img">
                    <img src={info['thumbImageUrl']}/>
                    <span>手动框选</span>
                </div>
                <div className="shituinfo-info">{this.createList()}</div>
            </div>
        </section>);
    }
}

export default InfoCard;
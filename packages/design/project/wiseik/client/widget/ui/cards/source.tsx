import * as React from 'react';
import Lib from '../../../observers/lib';
import {ISourceCard, IBaseState} from '../../../observers/interface';

/**
 * @file 来源卡片
 */

class SourceCard extends React.Component<ISourceCard, IBaseState> {

    /**
     * 渲染来源列表, 分为一下三种形态
     * 1. 同主题图片
     * 2. 更多咨询
     * 3. 来源
     */
    createList() {
        const props = this.props;
        const info = props.info;
        const url = info.redirectUrl + '&mod=site&url=';
        const host = Number(info.https) == 0 ? 'http://img2.imgtn.bdimg.com'
            : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy';

        return props.list.slice(0, 2).map((item, i) => {
            if (item['isSet'] && item['cs'].length > 2) {
                return (<li key={i}>
                    <div className="shitusource-setTitle">
                        <a href={url + encodeURIComponent(item['topic_url']) + '&index=' + i}>
                            <span>{item['tc']}</span><em>{item['cs'].length}张</em>
                        </a>
                    </div>
                    <div className="shitusource-setList">
                        <a href={url + encodeURIComponent(item['topic_url']) + '&index=' + i}><img src={host + '/it/u=' + item['cs'][0] + '&fm=201&gp=0.jpg'}/></a>
                        <a href={url + encodeURIComponent(item['topic_url']) + '&index=' + i}><img src={host + '/it/u=' + item['cs'][1] + '&fm=201&gp=0.jpg'}/></a>
                        <a href={url + encodeURIComponent(item['topic_url']) + '&index=' + i}><img src={host + '/it/u=' + item['cs'][2] + '&fm=201&gp=0.jpg'}/></a>
                    </div>
                </li>);
            } else if (item['isZx']) {
                return (<li key={i}>
                    <a href={url + encodeURIComponent(item['fromurl']) + '&index=' + i} className="shitusource-link">
                        <div className="shitusource-img">
                            <img src={info['thumbImageUrl']}/>
                        </div>
                        <div className="shitusource-info">
                            <h4>{item['title']}</h4>
                            <p className="shitusource-desc">
                                <span className="shitusource-zx">资讯</span>
                            </p>
                            <p className="shitusource-site">{item['site']}
                                <em>{item['time']}</em>
                            </p>
                        </div>
                    </a>
                </li>);
            } else {
                return (<li key={i}>
                    <a href={url + encodeURIComponent(item['fromURL']) + '&index=' + i}
                        className="shitusource-link">
                        <div className="shitusource-img">
                            <img src={item['thumbURL']}/>
                        </div>
                        <div className="shitusource-info">
                            <h4 dangerouslySetInnerHTML={{__html:item['fromPageTitle']}}></h4>
                            <p className="shitusource-desc" dangerouslySetInnerHTML={{__html:item['textHost']}}></p>
                            <p className="shitusource-site">
                                {item['fromURLHost']}
                                <em>{Lib.timeConvert(item['objTime'] * 1000)}</em>
                            </p>
                        </div>
                    </a>
                </li>);
            }
        })
    }

    render() {
        return (<section className="shitucard shitusource">
            <h2 className="shitucard-title">图片来源</h2>
            <ul>{this.createList()}</ul>
            {this.props.list.length > 2 ? <a className="shitusource-more" href="javascript:;">查看更多<i className="img-icon">&#xe614;</i></a> : null}
        </section>);
    }
}

export default SourceCard;
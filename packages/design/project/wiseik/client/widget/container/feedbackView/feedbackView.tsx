import * as React from 'react';
import {IBaseProps, IBaseState} from '../../../observers/interface';


/**
 * @file 反馈页面
 * @todo 反馈列表页
 */

class FeedbackView extends React.Component<IBaseProps, IBaseState> {

    render() {
        return (<section className="feedbackpage">
            <section className="subheader">
                <span onClick={() => history.back()} className="subheader-back img-icon"></span>
                <h1>意见反馈</h1>
            </section>
            <section className="feedback-detail">
                <h2>您遇到的问题类型<em>(必选)</em></h2>
                <ul className="feedback-list">
                    <li className="feedback-list-item" data-id="1824"><span className="feedback-list-itemtext">找商品</span></li>
                    <li className="feedback-list-item" data-id="1823"><span className="feedback-list-itemtext">找百科信息</span></li>
                    <li className="feedback-list-item" data-id="1826"><span className="feedback-list-itemtext">找同主题图片</span></li>
                    <li className="feedback-list-item" data-id="1825"><span className="feedback-list-itemtext">找壁纸</span></li>
                    <li className="feedback-list-item" data-id="1827"><span className="feedback-list-itemtext">找相似图片</span></li>
                    <li className="feedback-list-item" data-id="1829"><span className="feedback-list-itemtext">找更多尺寸</span></li>
                    <li className="feedback-list-item" data-id="1828"><span className="feedback-list-itemtext">找教程</span></li>
                    <li className="feedback-list-item feedback-list-itemselect" data-id="1830"><span className="feedback-list-itemtext">其他</span></li>
                    </ul>
                    <h2>反馈内容<em>(必填)</em></h2>
                    <div className="feedbox">
                        <textarea className="feedbox-text" placeholder="您的宝贵意见和建议对我们改进产品很重要～" rows={4}></textarea><span className="feedbox-limit">200</span>
                    </div>
                    <h2>联系方式</h2>
                    <div className="feedback-contact">
                        <input className="feedback-contact-text" placeholder="请留下您的联系方式，以便我们及时回复您。" size={100}/>
                    </div>
                    <input className="feedback-submit enable-submit" type="button" value="提交"/>
            </section>
        </section>);
    }
}

export default FeedbackView;
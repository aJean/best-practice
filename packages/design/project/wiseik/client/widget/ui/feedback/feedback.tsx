import * as React from 'react';
import {Link} from 'react-router-dom';
import {ICommon, IBaseState} from '../../../observers/interface';
import Lib from '../../../observers/lib';

/**
 * @file 用户反馈组件
 * @require feedback.less
 */

class Feedback extends React.PureComponent<ICommon, IBaseState> {
    render() {
        return (<section className="shitucard shitufeedback">
            <Link to={Lib.getRouterPath('feedback', this.props)}>告诉图片君想要什么~</Link>
        </section>);
    }
}

export default Feedback;

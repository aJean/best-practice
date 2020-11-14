import * as React from 'react';
import {ICommon, IBaseState} from '../../../observers/interface';
import {Link} from 'react-router-dom';
import Lib from '../../../observers/lib';

/**
 * @file 更多案例结果页组件
 */

class Case extends React.PureComponent<ICommon, IBaseState> {
    render() {
        const props = this.props;

        return (<section className="shitucard shitucase">
            <h2 className="shitucard-title">案例 : 识图都能做什么呢 ?</h2>
            <div className="shitucase-body">
                <a href={props.caseurl}>
                    <img src={props.caseimg}/>
                </a>
            </div>
            <Link to={Lib.getRouterPath('case', props)} className="shitucard-more">
                查看更多<i className="img-icon">&#xe614;</i>
            </Link>
        </section>);
    }
}

export default Case;


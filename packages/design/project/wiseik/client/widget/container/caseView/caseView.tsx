import * as React from 'react';
import {connect} from 'react-redux';
import {ICase, IBaseState} from '../../../observers/interface';
import {Link} from 'react-router-dom';

/**
 * @file 更多案例页面
 */

function mapStateToProps(state) {
    return {
        list: state['ui_caseList']
    };
}

class CaseView extends React.Component<ICase, IBaseState> {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }

    render() {
        const list = this.props.list;

        return (<section className="casepage">
            <section className="subheader">
                <span onClick={() => history.back()} className="subheader-back img-icon"></span>
                <h1>你可以做这些</h1>
            </section>
            <section className="case">
                <ul>{list.map((data, i) => {
                    return (<li key={i}>
                        <a href={data['url']} className="shitusource-link">
                            <img src={data['img']}/>
                        </a>
                    </li>);
                })}</ul>
            </section>
        </section>);
    }
}

export default connect(mapStateToProps)(CaseView);

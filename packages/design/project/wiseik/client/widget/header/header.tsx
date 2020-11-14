import * as React from 'react';
import SearchBox from './searchbox';
import {ICommon, IBaseState} from '../../observers/interface';

/**
 * @file Header
 */

class Header extends React.Component<ICommon, IBaseState> {
    /**
     * 主页按钮点击
     */
    homeHandle() {
        location.assign('/search/wiseindex?tn=wiseindex&fmpage=duturesult');
    }

    render() {
        return (
            <header>
                <section className="shituheader">
                    <span className="shituheader-home img-icon" onClick={this.homeHandle}>&#xe620;</span>
                    <h1>识图结果</h1>
                </section>
                <SearchBox {...this.props}/>
            </header>
        );
    }
}

export default Header;
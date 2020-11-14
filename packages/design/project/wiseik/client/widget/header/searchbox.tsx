import * as React from 'react';
import Camera from './camera';
import {ICommon} from '../../observers/interface';

/**
 * @class SearchBox
 * @extends {React.Component}
 */

interface IState {
    query: string;
}

class SearchBox extends React.Component<ICommon, IState> {
    state = {
        query: ''
    }

    componentWillMount() {
        this.state.query = this.props.word || this.props.guessWord;
    }

    inputHandle(e) {
        this.setState({query: e.target.value});
    }

    render() {
        const props = this.props;
        const thumbStyle = {backgroundImage: `url(${props.thumbImageUrl})`};

        return (<section className="searchbox">
            <form className="searchbox-fm" action="/wiseshitu" acceptCharset="utf-8">
                <div className="searchthumb">
                    <span className="searchthumb-bg" style={thumbStyle}></span>
                    <span className="searchthmub-close img-icon">&#xe613;</span>
                </div>
                <span className="searchbox-wrap">
                    <a className="searchbox-clear" href="javascript:;"></a>
                    <input className="searchbox-input" type="input" name="word" value={this.state.query} placeholder="请描述图片后搜索" onChange={this.inputHandle.bind(this)}/>
                    <input className="searchbox-btn" type="submit" value="搜索"/>
                </span>
            </form>
            <Camera vs={props.vs} server="/wiseik/p_result" fr="duturesultcam"/>
        </section>);
    }
}

export default SearchBox;
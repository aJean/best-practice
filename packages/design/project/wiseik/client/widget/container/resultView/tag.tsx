import * as React from 'react';
import {ITag} from '../../../observers/interface';

/**
 * @file 相似卡片 tag
 */

interface IState {
    loading: boolean;
    index: number;
}

class TagList extends React.Component<ITag, IState> {
    state = {
        loading: false,
        index: 0
    }

    componentWillReceiveProps() {
        // will not render twice
        this.setState({loading: false});
    }


    /**
     * 触发 tag ui 变化, 加载语义化数据
     */
    tagClickHandle(text, index, evt) {
        if (index == 0) {

        }

        this.setState({loading: true, index});
        this.props.tagHandle(text);
    }

    render () {
        const state = this.state;
        const list = this.props.tags.split('\t');

        return (<div className="shitutag-cont">
            <ul className="shitutag-list">
                {list.map((text, i) => {
                    return (<li key={i} className={i == state.index ? 'active' : null}
                        onClick={this.tagClickHandle.bind(this, text, i)}>{text}</li>);
                })}
            </ul>
            {state.loading ? <div className="shitutag-loading"></div> : null}
        </div>);
    }

}

export default TagList;

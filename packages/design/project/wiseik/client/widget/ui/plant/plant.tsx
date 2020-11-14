import * as React from 'react';
import {IPlantCard} from '../../../observers/interface';
import * as PhotoOverlay from '../overlays/photo';

interface IState {
    item: any;
    index: number;
}

class Plant extends React.PureComponent<IPlantCard, IState> {
    componentWillMount() {
        this.setState({
            item: this.props.list[0],
            index: 0
        });
    }

    handleTabClick(index) {
       const item = this.props.list[index];
       this.setState({item, index}); 
    }

    handleImgClick(imgurl) {
        PhotoOverlay.showPhoto(imgurl);
    }

    /**
     * 生成卡片 tab
     */
    createTabs() {
        return this.props.list.map((item, i) => {
            return (<li key={i} className={i == this.state.index ? 'checked' : null}
                onClick={this.handleTabClick.bind(this, i)}>{item['name']}</li>);
        });
    }

    createItem() {
        const item = this.state.item;
        return (<div>
            <ul className="shituplant-img">
                {this.createItemThumb()}
            </ul>
            <div className="shituplant-desc">
                {this.createItemDesc()}
            </div>
        </div>);
    }

    createItemThumb() {
        const item = this.state.item;
        return item['imgs'].map((data, i) => {
            return (<li key={i} style={{backgroundImage: `url(${data.smallImg})`}}
                onClick={this.handleImgClick.bind(this, data.bigImg)}></li>);
        });
    }

    createItemDesc() {
        const item = this.state.item;
        const host = this.props.info.redirectUrl + '&page=duturesult&mod=plant';
        const ret = [];

        if (item.baike.url) {
            ret.push(<span key="a" className="shituplant-desc1">
                <a href={host + '&url=' + encodeURIComponent(item.baike.url)}>
                    {item.name}
                </a>
            </span>);
        }

        if (item.baike.abstract) {
            ret.push(<span key="b" className="shituplant-desc2">
                <a href={host + '&url=' + encodeURIComponent(item.baike.url)}>{item.baike.abstract}
            </a></span>);
        }

        if (item.baike.url) {
            ret.push(<a href={host + '&url=' + encodeURIComponent(item.baike.url)} 
                key="d" className="shitucard-from">
                <span>来自百度百科</span>
                <em>查看ta的百科<i className="img-icon">&#xe614;</i></em>
            </a>);
        }     

        return ret;
    }

    render() {
        const props = this.props;

        return  (<section className="shitucard shituplant">
            {props.flag == 1 ? 
                <div className="shituplant-guide">
                    您想识别的是不是
                    <span>{props.class == 'plant' ? '植物' : '动物'}</span>
                </div> : null}
            <div className={'shituplant-content ' + props.class}>
                <div className="shituplant-title">图中可能是：</div>
                <div className="shituplant-tagscroll">
                    <ul className="shituplant-tag">
                        {this.createTabs()}
                    </ul>
                </div>
                <div className="shituplant-cont">
                    {this.createItem()}
                </div>
            </div>
        </section>);
    }
}

export default Plant;
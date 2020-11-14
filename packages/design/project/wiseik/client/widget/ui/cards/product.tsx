import * as React from 'react';
import {IProductCard, IBaseState} from '../../../observers/interface';

/**
 * @file 商品卡片
 */

class ProductCard extends React.PureComponent<IProductCard, IBaseState> {
    componentWillMount() {}

    createList() {
        const url = this.props.info.redirectUrl + '&mod=goods&page=duturesult&url=';
        const list = this.props.data['results'].slice(0, 4);
        return list.map((data, i) => {
            const item = data.items[0];
            return (<li key={i} className="shituproduct-item">
                <a href={url + encodeURIComponent(item['mobileBuyURL']) + '&index=' + i}>
                    <div className="shituproduct-img">
                        <img src={data['images'][0]['thumbURL']} width="100%"/>
                    </div>
                    <div className="shituproduct-iteminfo">
                        <p className="shituproduct-itemtitle">
                            {item['fromPageTitle']}
                        </p>
                        <p className="shituproduct-itemsale">
                            <span className="price"><sub>￥</sub>
                            <strong>{Math.floor(item['price'] / 100)}</strong>
                            <sub className="start">起</sub></span>
                            <cite>{item['source']}</cite>
                        </p>
                    </div>
                </a>
            </li>);
        });
    }

    render() {
        return (<section className="shitucard shituproduct">
            <h2 className="shitucard-title">图片中的商品</h2>
            <div className="shituproduct-body">
                {this.createList()}
            </div>
            {this.props.total > 4 ? <a href="javascript:;" className="shitucard-more">
                查看更多<i className="img-icon">&#xe614;</i>
            </a> : null}
        </section>);
    }
}

export default ProductCard;
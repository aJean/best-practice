/// <reference path="../../../node_modules/@types/zepto/index.d.ts"/>

import * as React from 'react';
import {connect} from 'react-redux';
import {resizeShitu, fetchSimilar} from '../../../observers/actions';
import {IResult, IBaseState} from '../../../observers/interface';
import Header from '../../header/header';
import SourceCard from '../../ui/cards/source';
import InfoCard from '../../ui/cards/info';
import VideoCard from '../../ui/cards/video';
import ProductCard from '../../ui/cards/product';
import PlantCard from '../../ui/plant/plant';
import Similar from './similar';
import Gotop from '../../ui/gotop/gotop';
import Feedback from '../../ui/feedback/feedback';
import Case from '../../ui/case/case';
import PhotoOverlay from '../../ui/overlays/photo';

/**
 * @file 结果页容器
 * @require resultView.less
 */

// root map
function mapStateToProps(state) {
    return {
        info: state['ui_common'],
        similarData: state['ui_similar'],
        sourceCard: state['ui_source'],
        sameCard: state['ui_same'],
        plantCard: state['ui_plant'],
        videoCard: state['ui_video'],
        productCard: state['ui_product']
    };
}

// root dispatch
function mapDispatchToProps(dispatch) {
    return {
        fetchSimilarData: pn => dispatch(fetchSimilar(pn)),
        resizeShitu: () => dispatch(resizeShitu())
    };
}

class ResultView extends React.Component<IResult, IBaseState> {
    componentDidMount() {
        const props = this.props;
        // 转屏事件
        $(window).on('orientationchange.shitu', e => {
            this.refs.sm['initUi']();
            this.props.resizeShitu();
        });
    }

    componentWillUnmount() {
         $(window).off('orientationchange.shitu');
    }

    findPhotoOverlay() {
        return this.refs.po;
    }

    render() {
        const props = this.props;
        const info = props.info;
        const simiNum = props.similarData.total;
        const sourceNum = props.sourceCard.total;
        const plantNum = props.plantCard.total;
        const videoNum = props.videoCard.seclass;
        const productNum = props.productCard.total;

        return (<div className="shitupage">
            <Header {...props.info}/>
            <InfoCard {...props.sameCard} info={props.info}/>
            {plantNum ? <PlantCard {...props.plantCard} info={info}/> : null}
            {videoNum? <VideoCard {...props.videoCard} info={info}/> : null}
            {sourceNum ? <SourceCard {...props.sourceCard} info={info}/> : null}
            {productNum ? <ProductCard {...props.productCard} info={info}/> : null}
            <section className="shitucard shituimglayout">
                <h2 className="shitucard-title">相似图片</h2>
                {simiNum > 0 ? <Similar ref='sm' {...props.similarData}
                    info={props.info} fetch={props.fetchSimilarData}/>
                    : <div className=" shituimglayout-loading"></div>}
            </section>
            <Feedback {...props.info}/>
            <Case {...props.info}/>
            <Gotop/>
            <PhotoOverlay ref="po"/>
        </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultView);;

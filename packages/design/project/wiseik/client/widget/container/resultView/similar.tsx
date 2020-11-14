/// <reference path="../../../node_modules/@types/zepto/index.d.ts"/>
/// <reference path="../../global.d.ts"/>

import * as React from 'react';
import {ISimilar, IBaseState} from '../../../observers/interface';
import TagList from './tag';

/**
 * @file 相似组件
 * @require similar.less
 */

class SimilarComponent extends React.Component<ISimilar, IBaseState> {
    pn = 0;
    // 双列布局
    leftSide = 0;
    rightSide = 0;
    leftCacheList = [];
    rightCacheList = [];
    cacheTag = null;
    // data properties
    startLoading = false;
    isend = false;

    // 细粒度判断增量 data 合法性
    shouldComponentUpdate(nextProps, nextState) {
        const list = nextProps.data;

        if (!list) {
            this.stopLoad();            
            return false;
        } else if (list.length < 30) {
            this.stopLoad();
        }

        return true;
    }

    componentDidMount() {
        let timeId = 0;

        this['$loadMore'] = $('.similar-load');
        // 无限下滑
        $(window).on('scroll.similar', e => {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                this.startLoading && this.needToLoad();
                this['inDocument'] && $['scrollPv'](this, {
                    etype: 'newpv',
                    mod: 'similar',
                    page: 'duturesult'
                });
            }, 200);
        });
        // pv 统计
        NsLog.sendLog({
            etype: 'newpv',
            pageno: 1,
            mod: 'similar',
            page: 'duturesult'
        });
    }

    componentWillUnmount() {
        $(window).off('scroll.similar');
    }


    /**
     * 点击缩略图跳转之前发统计
     * @param {number} pn
     * @param {string} imgurl
     */
    imgClickHandle(pn, imgurl) {
        NsLog.sendLog({
            etype: 'click',
            mod: 'similar',
            to: 'local',
            picurl: encodeURIComponent(imgurl),
            index: pn,
            page: 'duturesult'
        });
    }

    /**
     * 生成瀑布流片断
     */
    createList() {
        const info = this.props.info;
        const data = this.props.data;
        const type = info.uptype == 'qsearch' ? 'query' : 'similar';
        const word = encodeURIComponent(info.tag || info.word || 'undefined');
        const isWord = encodeURIComponent(info.tag || info.word || 'false');
        const lastpn = this.pn;
        const leftColumn = [];
        const rightColumn = [];

        data.forEach((item: any, i) => {
            // 大图页 pn
            const id = lastpn + i;
            const url = `/search/wiseala?tn=wiseala&ie=utf8&dutu=1&target=1&isword=${isWord}&similarid=${info.simid}&word=${word}&querySign=${info.querySign}&type=${type}&fmpage=dutu&style=2&pn=${id}&objurl=${encodeURIComponent(item.ObjURL)}&queryImgUrl=${encodeURIComponent(info.queryImageUrl)}&hs=${info.hs}`;
            const imgurl = item.thumbURL || item.ThumbnailURL;
            const jsx = (<a href={url} key={id} className="similar-item"
                onClick={this.imgClickHandle.bind(this, id, imgurl)}>
                <img src={imgurl} width="100%"/>
            </a>);

            if (this.leftSide <= this.rightSide) {
                this.leftSide++;
                leftColumn.push(jsx);
            } else {
                this.rightSide++;
                rightColumn.push(jsx);
            }
        });

        this.pn += data.length;
        return (<div className="similar-list">
            <div className="similar-left">
                {this.leftCacheList = this.leftCacheList.concat(leftColumn)}
            </div>
            <div className="similar-right">
                {this.rightCacheList = this.rightCacheList.concat(rightColumn)}
            </div>
        </div>);
    }

    loadClickHandle() {
        // 只有第一次点击起作用
        if (this.isend || this.startLoading) {
            return void 0;
        }

        this.loadMore();
        this.startLoading = true;

        NsLog.sendLog({
            etype: 'moreclick',
            mod: 'similar',
            cnt: 'more',
            page: 'duturesult'
        });
    }

    /**
     * 传递给 taglist, 恢复相似列表的初始状态
     */
    tagHandle(text) {
        const props = this.props;
        const info = props.info;

        this.initState(true);
        // 替换当前的搜索词
        info.word = text;
        info.simiServer = info.simiServer.replace(/word=[^&]*/, `word=${text}`);
        props.fetch(this.createServerUrl());
    }

    createServerUrl() {
        return this.props.info.simiServer + this.pn;
    }

    /**
     * 恢复最初状态
     * @param {boolean} force 是否恢复无更多数据状态
     * @todo 加载更多按钮使用 state 管理 ?
     */
    initState(force = false) {
        if (force) {
            this.isend = false;
            this['$loadMore'].removeClass('similar-nodata')
                .removeClass('similar-loading');
        }
        
        this.pn = 0;
        this.leftCacheList = this.rightCacheList = [];
        this.leftSide = this.rightSide = 0;
        this.initUi();
    }

    initUi() {
        this.startLoading = false;
        this['$loadMore'].removeClass('similar-loading');
    }

    /**
     * 可视区判断加载更多
     */
    needToLoad() {
        let targetNode = this['$loadMore'][0];
        let top = targetNode.getBoundingClientRect().top;

        if (top > 0 && top <= window.innerHeight) {
            this.loadMore();
        }
    }

    loadMore() {
        this['$loadMore'].removeClass('similar-nodata').addClass('similar-loading');
        this.props.fetch(this.createServerUrl());
    }

    /**
     * 停止无限下拉
     */
    stopLoad() {
        this.isend = true;
        this.startLoading = false;
        this['$loadMore'].addClass('similar-nodata');
        // $(window).off('scroll.similar');
    }

    show() {
        // 多个图片 list 时候需要这个属性
        this['inDocument'] = true;
    }

    hide() {
        this['inDocument'] = false;
    }

    render() {
        const props = this.props;
        const hasMore = props.data.length >= 30;
        const tags = props.tags;

        return (<div className="shitusimilar">
            {tags ? <TagList tags={tags} tagHandle={this.tagHandle.bind(this)}/> : null}
            {this.createList()}
            <div className="similar-load" onClick={this.loadClickHandle.bind(this)}>
                <span>加载更多图片</span>
                <i className="img-icon">&#xe616;</i>
            </div>
        </div>);
    }
}

export default SimilarComponent;

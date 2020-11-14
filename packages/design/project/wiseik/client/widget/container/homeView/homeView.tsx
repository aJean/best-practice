import * as React from 'react';
import Camera from '../../header/camera';
import Goodcase from './goodcase';
import {IBaseProps, IBaseState} from '../../../observers/interface';

/**
 * @class HomeView
 * @extends {React.Component}
 * @require homeView.less
 */

class HomeView extends React.Component<IBaseProps, IBaseState> {
    $bannerCon: any
    $bannerImg: any
    $bannerDot: any
    superSlider: any

    componentWillMount() {
        $(window).on('resize', e => {
            this.setState({resize: true})
        });
    }

    componentDidMount() {
        var that = this;
        var data = [{
            imgUrl: '//img6.bdstatic.com/img/image/public/01.jpg',
            link: ''
        }, {
            imgUrl: '//img6.bdstatic.com/img/image/public/02.jpg',
            link: ''
        }, {
            imgUrl: '//img6.bdstatic.com/img/image/public/03.jpg',
            link: ''
        }]
        this.$bannerCon = $('.bannerContent');
        this.$bannerImg = $('.bannerImg');
        this.$bannerDot = $('.bannerDot');

        // 去掉公用的相机框
        $('.appcamera-ico').html('');

        // 转屏
        window.onresize = function () {
            that.reset();
        }

        window.onload = function () {
            that.reset();
        }

        this.buildBanner(data);
    }

    reset() {
        var width = window.innerWidth;
        var height = width * 473 / 480;
        var style = {
            height: height,
            width: width
        }
        this.$bannerImg.find('img').css(style);
    }

    buildBanner(data) {
        var that = this;
        var imgsHtmlArr = [];
        var stateHtmlArr = [];

        for (var i = 0; i < data.length; i++) {
            imgsHtmlArr.push('<a><img src="' + data[i].imgUrl + '"></a>');
            stateHtmlArr.push('<div></div>');
        }

        that.$bannerDot.html(stateHtmlArr.join(""));
        var $pages;
        var firstShow = true;

        this.superSlider && this.superSlider.destory(true);
        this.superSlider = that.$bannerImg.superSlider({
            //循环
            loop: 3000,
            //循环方向
            //换到该页时才加载
            lazyLoad: false,
            // opacity: .4,
            //填充内容
            pages: imgsHtmlArr,
            //跟随手指
            isFollow: true,
            //动画前
            beforechange: function(i) {
                if (!firstShow) {
                    var me = this;
                    // nextFrame(function() {
                    $pages || ($pages = $(me.nodes))
                    $pages.eq(i).attr('class', 'current').siblings('.current').removeClass('current')
                    // })
                }
            },

            //动画后
            afterchange: function(i) {
                if (firstShow) {
                    this.nodes[i].className = 'current';
                    firstShow = false;
                }
                that.$bannerDot.children().removeClass('cur');
                that.$bannerDot.children().eq(i).addClass('cur');
            },

            onBreakpoint: function(fromNode, toNode, rate) {
                if (rate > .5) {
                    fromNode.className = '';
                    toNode.className = 'current';
                } else {
                    fromNode.className = 'current';
                    toNode.className = '';
                }
            }
        });
    }

    render() {
        const width = window.innerWidth;
        const height = width * 578 / 500;
        const style = {
            height: height,
            width: width
        };

        return (<section>
            <div className="bannerContent" style={style}>
                <div className="bannerImg"></div>
                <div className="bannerDot"></div>
                <Camera server="wiseshitu" fr="shituhome" vs=""/>
            </div>
            <div className="bannerBottom">
                <p className="line1">探索更多未知</p>
                <p className="line2">FIND  MORE</p>
            </div>
            <Goodcase/>
        </section>);
    }
}

export default HomeView;

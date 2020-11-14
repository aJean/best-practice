/// <reference path="../../../node_modules/@types/zepto/index.d.ts"/>

/**
 * @class HomeView
 * @extends {React.Component}
 */

export default {
    init: function() {
        var that = this;
        var data = [{
            imgUrl: __uri('/client/static/img/banner1.jpg'),
            link: ''
        }, {
            imgUrl: __uri('/client/static/img/banner2.jpg'),
            link: ''
        }, {
            imgUrl: __uri('/client/static/img/banner3.jpg'),
            link: ''
        }, {
            imgUrl: __uri('/client/static/img/banner4.jpg'),
            link: ''
        }]
        this.$bannerCon = $('.bannerContent');
        this.$bannerImg = $('.bannerImg');
        this.$bannerDot = $('.bannerDot');
        this.$cameraIcon = $('.cameraIcon');
        this.$cameraBtn = $('.appcamera-invisible');


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
        this.bindEvents();
    },
    bindEvents: function () {
        var that = this;
        this.$cameraIcon.on('click', function () {
            that.$cameraBtn.click();
        })
        $(window).scroll(function(event){
            var limitHeight = that.$bannerCon.height();
            var bScrollH = document.body.scrollHeight; // 滚动条总高度
            var wScrollY = window.scrollY; // 当前滚动条位置
            if (wScrollY > limitHeight) {
                that.$cameraIcon.show();
            } else {
                that.$cameraIcon.hide();
            }
        })
        // var wScrollY = window.scrollY; // 当前滚动条位置
        // var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
        // var bScrollH = document.body.scrollHeight; // 滚动条总高度
        // if (wScrollY + wInnerH >= bScrollH) {
        //     showMore();
        // }
    },
    reset: function() {
        var width = window.innerWidth;
        var height = width * 326 / 414;
        var style = {
            height: height,
            width: width
        }
        this.$bannerCon.css(style);
        this.$bannerImg.find('img').css(style);

        var liwidth = (window.innerWidth - 8) / 3;
        var listyle = {
            width: liwidth,
            height: liwidth
        };
        $('.goodCaseCon').find('li').css(listyle);

    },

    buildBanner: function(data) {
        var that = this;
        var imgsHtmlArr = [];
        var stateHtmlArr = [];

        for (var i = 0; i < data.length; i++) {
            imgsHtmlArr.push('<img src="' + data[i].imgUrl + '">');
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
};

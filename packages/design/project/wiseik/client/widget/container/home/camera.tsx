import Uploader from '../../header/upload/upload';

/**
 * @file 头部相机
 */

var Camera =  {
    init: function() {
        MaskLayer.install();

        let $root = $('.bannerContent');

        this.$input = $root.find('.appcamera-invisible');
        this.$form = $root.find('.appcamera-form');
        this.$camera = $root.find('.appcamera-invisible');
        this.bindEvent();
    },

    bindEvent: function() {
        const that = this;

        this.$input.eq(0).on('change', function () {
            MaskLayer.show();
            that.upload(this.files[0]);
        });

        this.$camera.on('click', function () {
            NsLog.sendLog({
                etype: 'cameraClick'
            });
        });

        // 配置 uploader
        Uploader.setConfig({
            timeout: 20000,
            onSuccess: function (ret) {
                if (ret.errno == 0) {
                    NsLog.sendLog({
                        etype: 'camera_success',
                        page: 'duturesult'
                    });
                    NsLog.speedLog({
                        shituvs: bd.vs,
                        pos: '2',
                        uptype: 'homeBtn',
                        queryurl: encodeURIComponent(ret.url),
                        cs: encodeURIComponent(ret.querySign)
                    });
                    MaskLayer.setText('正在跳转到新页面...');
                    location.assign(`//image.baidu.com/wiseshitu?guess=1&queryImageUrl=${encodeURIComponent(ret.url)}&querySign=${encodeURIComponent(ret.querySign)}&simid=${encodeURIComponent(ret.simid)}&fr=shituhome&uptype=homeBtn&shituvs=${bd.vs}`);
                } else {
                    NsLog.sendLog({
                        etype: 'camera_fail',
                        page: 'duturesult'
                    });
                }

                $.nextStep(function () {
                    MaskLayer.hide();
                }, 2000);
            },

            onError: function () {
                NsLog.sendLog({
                    etype: 'camera_fail',
                    page: 'duturesult'
                });
                MaskLayer.hide();
            },

            onProgress: function (e) {
                let percentComplete = Math.round(e.loaded * 100 / e.total);

                if (e.loaded == 0 && e.total == 0) {
                    percentComplete = 0;
                } else if (isNaN(percentComplete)) {
                    percentComplete = 100;
                    MaskLayer.setText('正在跳转到新页面...');
                }

                MaskLayer.setProcess(percentComplete + '%');
            },

            onTimeout: function () {
                NsLog.sendLog({
                    etype: 'camera_timeout',
                    page: 'duturesult'
                });

                alert('当前网速较慢，请更换网络!');
                MaskLayer.hide();
            },

            sendAlready: function () {
                that.$form[0].reset();
            }
        });
    },

    /**
     * 上传图片
     * @param {binary} file 上传的图片
     */
    upload: function(file, exif) {
        window.scrollTo(0, 1);

        NsLog.sendLog({
            etype: 'camera_start',
            page: 'duturesult'
        });

        NsLog.speedLog({
            shituvs: bd.vs,
            pos: '1',
            uptype: 'homeBtn'
        });

        Uploader.quickUpload(file);
    }
}

// 遮罩层管理
let MaskLayer = {
    install: function () {
        const $root = this.$root = $(`<div class="cameramask"><span class="cameramask-close img-icon">&#xe613;</span><div class="cameramask-process"><div class="cameramask-num">0%</div><span class="cameramask-text">努力识图中...</span></div></div>`).appendTo(document.body);

        this.$close = $root.find('.cameramask-close');
        this.$processNum = $root.find('.cameramask-num');
        this.$processText = $root.find('.cameramask-text');

        this.bindEvent();
    },

    bindEvent: function () {
        this.$close.on('click', function () {
            MaskLayer.hide();
        });

        this.$root.on('touchmove', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    },

    setProcess: function (str) {
        this.$processNum.html(str);
    },

    setText: function (text) {
        this.$processText.html(text);
    },

    show: function () {
        this.$root.show();
    },

    hide: function () {
        this.$root.hide();
    }
};

module.exports = Camera;

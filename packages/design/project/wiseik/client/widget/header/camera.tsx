/// <reference path="../../node_modules/@types/zepto/index.d.ts"/>
/// <reference path="../global.d.ts"/>

import * as React from 'react';
import * as ReactDom from 'react-dom';
import Uploader from './upload/upload';
import {ICamera, IBaseState} from '../../observers/interface';

/**
 * @file 头部相机
 * @require camera.less
 */

class Camera extends React.Component<ICamera, IBaseState> {
    componentDidMount() {
        const that = this;
        const props = this.props;
        MaskLayer.install();
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
                        shituvs: props.vs,
                        pos: '2',
                        uptype: 'upload_wise',
                        queryurl: encodeURIComponent(ret.url),
                        cs: encodeURIComponent(ret.querySign)
                    });

                    MaskLayer.setText('正在跳转到新页面...');
                    location.assign(`${props.server}?guess=1&queryImageUrl=${encodeURIComponent(ret.url)}&querySign=${encodeURIComponent(ret.querySign)}&simid=${encodeURIComponent(ret.simid)}&fr=${props.fr}&uptype=upload_wise&shituvs=${props.vs}`);
                } else {
                    NsLog.sendLog({
                        etype: 'camera_fail',
                        page: 'duturesult'
                    });
                }

                setTimeout(() => MaskLayer.hide(), 500);
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
                ReactDom.findDOMNode(that.refs.myform)['reset']();
            }
        });
    }

    componentWillUnmount() {
        $('.cameramask').off('*').empty().remove();
    }

    cameraClickHandle() {
        NsLog.sendLog({etype: 'cameraClick'});
    }

    fileChangeHandle(e) {
        MaskLayer.show();
        this.upload(e.target.files[0]);
    }

    /**
     * 上传图片
     * @param {binary} file 上传的图片
     */
    upload(file) {
        window.scrollTo(0, 1);

        NsLog.sendLog({
            etype: 'camera_start',
            page: 'duturesult'
        });

        NsLog.speedLog({
            shituvs: this.props.vs,
            pos: '1',
            uptype: 'upload_wise'
        });

        Uploader.quickUpload(file);
    }

    render() {
        return (<div className="appcamera">
            <div className="appcamera-ico img-icon" onClick={this.cameraClickHandle}>&#xe612;</div>
            <div className="appcamera-file">
                <form ref="myform" className="appcamera-form">
                    <input type="file" name="upload" className="appcamera-invisible" accept="image/*" onChange={this.fileChangeHandle.bind(this)}/>
                </form>
            </div>
        </div>);
    }
}

// 遮罩层管理, 使用 zepto 处理比较方便
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

export default Camera;

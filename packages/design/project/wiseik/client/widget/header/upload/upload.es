import EXIF from './exif';
import Compress from './compress';

/**
 * @file 图片上传器
 */

const noop = function() {};
const config = {
    server: '/wiseshitu/a_upload',
    timeout: 15000,
    onError: noop,
    onSuccess: noop,
    onTimeout: noop,
    onProgress: noop,
    sendAlready: noop
};

export default {
    setConfig(opts) {
        $.extend(config, opts);
    },

    quickUpload(file) {
        const that = this;
        // 只压缩 jpg
        if (/jpeg|jpg/.test(file.type) && Uint8Array && FileReader) {
            try {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const result = this.result;
                    const img = new Image();
                    img.onload = function() {
                        const data = Compress.compressImg(img);
                        const exif = EXIF.readFromBinaryFile(result);
                        // 设置旋转标记
                        that.setConfig({
                            server: '/wiseshitu/a_upload?exif='
                                + (exif && exif.Orientation || 1)
                        });
                        that.uploadFile(data);
                    };
                    img.src = Compress.bufferEncode(result);
                };
                reader.readAsArrayBuffer(file);
            } catch(e) {
                that.uploadFile(file);
            }
        } else {
            that.uploadFile(file);
        }
    },

    uploadFile(file) {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        const cleanXhr = function () {
            xhr.abort();
            clearTimeout(timeId);
        };
        let timeId;

        formData.append('upload', file);
        xhr.open('post', config.server);

        xhr.onload = function () {
            config.onSuccess(JSON.parse(xhr.responseText), xhr);
            cleanXhr();
        };

        xhr.onerror = function () {
            config.onError(xhr);
            cleanXhr();
        };

        xhr.upload.addEventListener('progress', function (e) {
            config.onProgress(e, xhr);
        }, false);

        xhr.send(formData);
        config.sendAlready();

        timeId = setTimeout(function () {
            cleanXhr();
            config.onTimeout();
        }, config.timeout);
    }
}

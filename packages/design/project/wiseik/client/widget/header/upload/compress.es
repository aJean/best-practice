/**
 * @file 图片压缩器
 */

const config = {
    limit: 800
};

/**
 * 压缩图片尺寸
 */
function resetImgSize(width, height) {
    const ratio = width / height;
    const limit = config.limit;
    let rwidth;
    let rheight;
    
    if (width > limit) {
        rwidth = limit;
        rheight = rwidth / ratio;
    } else {
        rheight = limit;
        rwidth = rheight * ratio;
    }

    return {width: rwidth, height: rheight};
}

export default {
    setConfig(opts) {
        $.extend(config, opts);
    },

    compressImg(img) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext('2d');
        const size = resetImgSize(img.width, img.height, 800);

        canvas.width = size.width;
        canvas.height = size.height;
        ctx.drawImage(img, 0, 0, size.width, size.height);
        // 去掉 base64 sign
        return canvas.toDataURL('image/jpeg', 0.9).replace(/^data:image\/\w+;base64,/, '');
    },

    /**
     * arraybuffer to base64
     */
    bufferEncode(input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = new Uint8Array(input);
        while (i < input.length) {
            chr1 = input[i++];
            chr2 = i < input.length ? input[i++] : Number.NaN;
            chr3 = i < input.length ? input[i++] : Number.NaN;

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }

        return `data:image/jpeg;base64,${output}`;
    }
};
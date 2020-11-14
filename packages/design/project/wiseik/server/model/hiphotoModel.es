/**
 * @file 上传图片接口
 */
'use strict';

import * as Image from '../lib/image';
import Source from '../lib/source';
import Result from '../lib/result';

export default function uploadImage(picture, orientation) {
    // 如果图片被旋转，就用 hiphoto 转回来
    const picSpec = 'eW=400' + (orientation != 1 ? ';r=90' : '');
    const data = {picture};
    const result = {errno: -1};

    try {
        data.querySign = Image.calSign(picture);
    } catch (e) {
        return Promise.reject(e);
    }

    return Source.fetchAll([
        {name: 'upload', param: data},
        {name: 'simid', param: data}
    ]).then(allResponse => {
        const imgState = allResponse[0];
        const sameState = allResponse[1];

        if (imgState.err_no == 0) {
            const picId = imgState.pic_id;
            const picUrl = Image.calPicUrl(picId, picSpec);

            result.errno = 0;
            result.url = picUrl;
            result.querySign = imgState.sign0 + ',' + imgState.sign1;
            result.simid = data.simid = sameState && sameState.simid;

            // 发一个删除黄图的请求先
            Source.fetch('pron', {picUrl, picId});
        }

        return result;
    });
};

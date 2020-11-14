/**
 * @file 图片剪裁的下载服务
 */

import {curlImage} from '../lib/image';
import {getDownloadError} from '../lib/error';

export default async function (req, res) {
    const imgurl = req.query.imgurl;

    try {
        const binary = await curlImage(imgurl, {spec: 'w=2000'});
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename=image.jpg',
            'Content-Length': binary.length
        });
        res.send(binary);
    } catch (e) {
        res.json(getDownloadError(e))
    }
};

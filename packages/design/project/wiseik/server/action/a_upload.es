/**
 * @file 上传图片 action
 * 前端裁剪, 上传图片 binary
 */

import uploadImage from '../model/hiphotoModel';
import {getSameParam} from '../lib/param';
import {getUploadError} from '../lib/error';
import {getExif} from '../lib/util';
import {enableCors} from '../lib/util';

const multer = require('multer');

export default async function (req, res) {
    enableCors(req, res);

    let controller = multer({
        storage: multer.memoryStorage(),
        limit: {
            fieldSize: 2097152 // 2MB
        }
    });

    // 单文件上传
    controller.single('upload')(req, res, function (error) {
        if (error) {
            return res.json(getUploadError(error));
        }

        let fileBuffer;
        // base64 的情况, 数据保存在 body 中
        if (req.body && req.body.upload) {
            fileBuffer = new Buffer(req.body.upload, 'base64');
        } else if(req.file && req.file.buffer) {
            fileBuffer = req.file.buffer;
        } else {
            return res.json(getUploadError('no file'));
        }

        // 识图结果页 compress, 可以直接读取到 exif 信息
        if (req.query.exif != void 0 ) {
            const orientation = req.query.exif;
            uploadImage(fileBuffer, orientation).then(function (uploadState) {
                setTimeout(() => res.json(uploadState), 300);
            }).catch(function (e) {
                res.json(getUploadError('upload fail'));
            });
        // 检索页面依然需要读取 exif
        } else {
            getExif(fileBuffer).then(exif => {
                const orientation =  exif.image ? (exif.image.Orientation || 1) : 1;
                return uploadImage(fileBuffer, orientation);
            }).then(function (uploadState) {
                setTimeout(() => res.json(uploadState), 300);
            }).catch(function (e) {
                res.json(getUploadError('upload fail'));
            });
        }
    });
};

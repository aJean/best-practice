/**
 * @file 图片下载，后期处理等
 */

import {domainSharding} from '../lib/util';
const picsdk = require('picsdk').pic;
const fetchurl = require('fetchurl');
const http2https = require('./https/http2https.json');
const https2http = require('./https/https2http.json');
const Md5 = require('md5');
const Url = require('url');
const dns = require('dns');

/**
 * 过滤下载 url
 * @param {string} imgurl 要下载的图片地址
 * @return {string} filename 文件名
 */
export function isSafeUrl(imgurl) {
    return new Promise(function (resolve, reject) {
        try {
            const result = Url.parse(imgurl);
            const hostname = result.hostname;
            const filename = Md5(imgurl) + '.jpg';
            const rsafe = /(bdimg\.com|imgsrc\.baidu\.com|t1[0-9]\.baidu\.com|hiphotos\.baidu\.com|shitu\.baidu\.com|stu\.baidu\.com|mt1\.baidu\.com|picphotos\.baidu\.com|timg\.baidu\.com)$/;
            // 断域名白名单
            if (rsafe.test(hostname)) {
                resolve();
            } else {
                dns.resolve4(hostname, function (error, ip) {
                    if (error || !ip.length) {
                        reject('unknown ip');
                        return;
                    }

                    ip = ip[0];
                    const start = ip && ip.split('.')[0];
                    (start == 10 || start == 172 || start == 192) ? reject('illegal ip'): resolve(imgurl.replace(hostname, ip));
                });
            }
        } catch (e) {
            reject('download failed');
        }
    });
};

/**
 * 安全下载图片
 * @param  {string} imgurl 图片网址
 * @param  {Object} opts  抓取参数
 * @return {Object}       promise
 */
export function curlImage(imgurl, opts) {
    opts = opts || {};

    return isSafeUrl(imgurl).then(function (newurl) {
        const result = Url.parse(imgurl);
        const hostname = result.hostname;
        // 内网域名不支持 443 端口
        if (/hiphotos/.test(hostname)) {
            imgurl = imgurl.replace(/^https/, 'http');
        }

        const data = {
            headers: {Referer: 'http://www.baidu.com'},
            // 非 hiphoto，https 使用代理
            proxy: useProxy(hostname, imgurl)
        };
        // 下载始终使用代理 mt1
        if (opts.spec) {
            imgurl = calTimg(imgurl, opts.spec);
            data.proxy = true;
            // dns ssrf
        } else if (newurl) {
            imgurl = newurl;
            data.headers['Host'] = hostname;
            data.headers['x-bd-product'] = 'image';
        }
        // 是否保留 response header
        if (opts.extra) {
            data.includeExtras = true;
            data.extrasKey = '_res';
        }
        // https 设置 host
        if (result.protocol == 'https:') {
            data.headers['Host'] = hostname;
        }

        return fetchurl(imgurl, data);
    });
};

/**
 * 计算 cs 或 os
 * @param {string|binary} buffer
 */
export function calSign(buffer) {
    return picsdk.sign(buffer).join();
};

/**
 * 计算图片 url
 */
export function calPicUrl(picId, picSpec) {
    return picsdk.pid2Url({
        productName: 'image',
        picId: String(picId),
        domain: domainSharding(picId),
        picSpec: picSpec
    });
};

/**
 * 缩略图服务，根据 url 判断 https
 * @param {string} url 图片地址
 * @param {number} size 图片高度
 * @param {string} protocol 协议
 */
export function calTimg(url, size, protocol) {
    const date = Date.now();
    let hostname, time, di, thumbUrl;

    if (/^https:/.test(url)) {
        return url;
        // 协议是 https 而 url 是 http 的 case, example queryImageUrl
    } else if (protocol == 'https' && /^http:/.test(url)) {
        time = date + 7 * 24 * 60 * 1000;
        di = Md5('wisetimgkey_noexpire_3f60e7362b8c23871c7564327a31d9d7' + time + url);
        hostname = 'https://timgsa.baidu.com/timg?image';
    } else {
        time = String(date).slice(0, -3);
        di = Md5('wisetimgkey' + time + url);
        hostname = 'http://mt1.baidu.com/timg?shitu';
    }

    thumbUrl = hostname + '&quality=100&sharpen=100&' +
        'er=&imgtype=0&wh_rate=null&size=' + size + '&sec=' + time + '&di=' +
        di + '&src=' + encodeURIComponent(url);

    return thumbUrl;
};

/**
 * 是否使用代理
 * @param {any} hostname 
 * @param {any} url 
 */
export function useProxy(hostname, url) {
    return (!/imgtn\.bdimg\.com|hiphotos/.test(hostname) || /^https/.test(url));
}
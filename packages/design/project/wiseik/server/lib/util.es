/**
 * @file 工具方法
 */
'use strict';

const ExifImage = require('exif').ExifImage;
const Md5 = require('md5');
const sha1 = require('sha1');
const url = require('url');
const http2https = require('./https/http2https.json');
const https2http = require('./https/https2http.json');

// 开启跨域资源共享
export function enableCors(req, res) {
    try {
        const origin = req.get('Origin');
        if (/baidu\.com/i.test(origin)) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'POST,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        }
    } catch (e) {}
}

/**
 * decode - decode
 */
export function decode(str) {
    return str ? decodeURIComponent(str) : str;
}

// 获取图片定位信息
export function getExif(picture) {
    return new Promise(function(resolve, reject) {
        try {
            new ExifImage({image : picture}, function (error, exifData) {
                resolve(error || exifData);
            });
        } catch (error) {
            resolve(error);
        }
    });
}

export function xssFilter(str) {
    return /[<>]/g.test(str) ? undefined : str;
}

// string 2 decimal, for hasing
function getDecimalVal(str) {
    let tempstr = String(str);
    let code = tempstr.charCodeAt(0);

    if (isNaN(parseInt(str))) {
        return Number(code - 'a'.charCodeAt(0) + 10);
    } else {
        return Number(code - '0'.charCodeAt(0));
    }
}

/**
 * 转化协议
 * @param {string} target 转换目标
 * @param {boolean} flag 转换方向
 */
export function transformUrl(targetUrl, flag) {
    const result = url.parse(targetUrl);
    const host = result.hostname + (flag ? '/' + result.path.split('/')[1] : '');
    let lastUrl;

    if (flag) {
        const hosts = https2http[host];
        lastUrl = hosts ? targetUrl.replace('https://' + host, 'http://' + hosts) : targetUrl;
    } else {
        const hosts = http2https[host];
        lastUrl = hosts ? targetUrl.replace('http://' + host, 'https://' + hosts) : targetUrl;
    }

    return lastUrl;
};

/**
 * checkRouter - 检测 action router 合法性
 * 手百抓图非常不规范, 所以针对 bdappid 放宽了判断
 * @param {string} query
 * @param {string} url
 */
export function checkRouter(query, url) {
    const imgurl = query.queryImageUrl;

    if (query.id === 'bdappid' || /bdappid/.test(url) ) {
        return true;
    } else if (typeof imgurl !== 'string') {
        return false;
    }

    return imgurl && /^http.+\.(jpg|png|gif|jpeg)$/.test(imgurl);
};

/**
 * 使用 timg 转化 https
 * @param {string} imgurl
 */
export function transformTimg(imgurl) {
    const time = Date.now() + 7 * 24 * 60 * 1000;
    const di = Md5('wisetimgkey_noexpire_3f60e7362b8c23871c7564327a31d9d7' + time + imgurl);

    return ('https://timgsa.baidu.com/timg?image&quality=100&'
        + 'sharpen=100&er=&imgtype=0&wh_rate=null&size=&sec='
        + time + '&di='+ di + '&src=' + encodeURIComponent(imgurl));
};

/**
 * 人脸百科 https 替换
 */
export function httpsFace(faceState) {
    if (faceState && faceState.faceUrl && faceState.data) {
        const url1 = faceState.faceUrl;
        const url2 = faceState.data.st;
        const host1 = url.parse(url1).hostname;
        const host2 = url.parse(url2).hostname;
        const host1s = http2https[host1];
        const host2s = http2https[host2];

        faceState.faceUrl = host1s ? url1.replace('http://' + host1, 'https://' + host1s) : transformTimg(url1);

        if (host2s) {
            faceState.data.st = url2.replace('http://' + host2, 'https://' + host2s);
        }
    }
};

/**
 * 计算人脸坐标
 * @param {object} faceInfo
 */
export function calFace(faceInfo) {
    let w = faceInfo.w * 2;
    let h = faceInfo.h * 2;
    let x = faceInfo.x - faceInfo.w * 0.5;
    let y = faceInfo.y - faceInfo.h * 0.5;
    let pw = faceInfo.pic_width;
    let ph = faceInfo.pic_height;
    let ratio = faceInfo.press_ratio;
    let crop = '';

    if (x < 0) {
        x = 0;
    } else if (x + w > pw) {
        x = pw - w;
    }

    if (y < 0) {
        y = 0;
    } else if (y + h > ph) {
        y = ph - h;
    }

    if (h > ph) {
        w = w * ph / h;
        h = ph;
    }

    if (w > pw) {
        h = h * pw / w;
        w = pw;
    }

    crop = 'crop=' + parseInt(x / ratio, 10) + ',' + parseInt(y / ratio, 10)
        + ',' + parseInt(w / ratio, 10) + ',' + parseInt(h / ratio, 10);

    return crop;
};

/**
 * 获取最大值独立项
 * @param {array} list
 * @param {string} key 参照属性
 */
export function getMaxBy(list, key) {
    let val = 0;
    let index = 0;
    let maxItem;

    list.forEach(function (data, i) {
        if (data[key] > val) {
            val = data[key];
            index = i;
        }
    });

    maxItem = list[index];
    maxItem[key] = val;

    return maxItem;
}

/**
 * 去除重复数据
 * @param {array} list
 * @param {string} list 参照项
 */
export function unDuplicate(list, key) {
    var map = {};
    var newList = [];

    list.forEach(function (data) {
        var val = data[key];
        if (!map[val]) {
            map[val] = val;
            newList.push(data);
        }
    });

    return newList;
};

/**
 * 域名分散
 * @param {number} pid
 */
export function domainSharding(pid) {
    const domainString = "abcdefgh";
    return (domainString[pid % 8] + '.hiphotos.baidu.com');
}

/**
 * 过滤离线猜词
 * @param {object} guessword
 */
export function filterOffGuess(guessList) {
    const guessword = guessList[0];
    const keyword = guessword.keyword;
    const maxword = guessword.maxword;
    const maxscore = guessword.maxscore;
    const curVisScore = guessword['cur_vis_score'];
    const maxVisScore = guessword['max_vis_score'];

    if (guessword['maxvote'] > 25 || maxscore > 1.5) {
        return guessList;
    }

    if (maxscore < 1.0) {
        if (keyword.lastIndexOf(maxword) !== -1 && maxVisScore > 0.7) {
            return guessList;
        }
        return false;
    } else {
        if (curVisScore > 0 && curVisScore < 0.3) {
            return false;
        } else {
            if (keyword.lastIndexOf(maxword) !== -1 || maxword.lastIndexOf(keyword) !== -1) {
                if (maxVisScore < 0.45) {
                    return false;
                }
            } else {
                if (maxVisScore < 0.4) {
                    return false;
                }
            }
        }
    }

    return guessList;
};

/**
 * 过滤在线猜词
 * @param {object} guessword
 */
export function filterOnGuess(guessList) {
    const guessword = guessList[0];
    const keyword = guessword.keyword;
    const source = guessword.source;
    const score = guessword.score;
    const secondScore = guessword['second_score'];

    if (source == 1 && score > 7 && secondScore > 0.5) {
        return guessword;
    } else if (source == 9) {
        if (score > 0.9 && secondScore > 0.85 || score > 0.96 && secondScore > 0.68) {
            return guessword;
        }
    } else if (source == 3 && score > 10) {
        return guessword;
    }

    return false;
};

/**
 * 计算 redirect vs
 * @return {[type]} [description]
 */
export function calVs(bid) {
    const now = Date.now() / 1000;
    const s = parseInt(now, 10);
    const ret = (Math.round((now - s) * 1000) / 1000) + ' ' + s;
    bid = bid || '';

    return sha1(bid + ret);
};

/**
 * 计算 hashring 的 key
 * @param {string} key
 */
export function calBalanceKey(key) {
    let md5key = Md5(key);
    let hashkey = 0;

    for (let i = 0; i < 8; i++) {
        hashkey = hashkey * 16 + getDecimalVal(md5key[i]);
    }

    return hashkey;
};

/**
 * 是否发送壁纸请求
 * @param {string} query
 */
export function shouldWallpaper(query) {
    return /壁纸|bizhi|手机墙纸|主题桌面/g.test(query);
};

/**
 * 站外跳转加密参数计算
 * @param {string} reqTime [description]
 * @param {string} bid     [description]
 * @return {Object}         [description]
 */
export function calRedirect(reqTime, bid) {
    const juid = (bid || '').substring(0, 6);
    const encodeDict = {
        0: 'b',
        1: 'a',
        2: 'i',
        3: 'd',
        4: 'u',
        5: 'w',
        6: 'z',
        7: 'p',
        8: 'm',
        9: 's'
    };

    let timeSign = '';
    let key;
    reqTime = String(reqTime).slice(0, -3);

    try {
        for (let i = 0; i < reqTime.length; i++) {
            key = encodeDict[reqTime[i]];
            if (!key) {
                timeSign = null;
                break;
            }
            timeSign += key;
        }
    } catch (e) {}

    return {
        juid: juid,
        sign: timeSign
    };
};

import * as Util from './util';
import * as Image from './image';
const Md5 = require('md5');
const IP = require('ip');

/**
 * @file source - 参数处理类
 */

const remoteIp = IP.address();
export default {
    /**
     * parseHome - 首页参数解析
     */
    parseHome(req) {
        const xssl = req.headers['x-ssl-header'];
        const protocol = xssl ? 'https' : 'http';

        return {
            page: 'dutuhome',
            Https: xssl ? '1' : '0',
            protocol: protocol,
            vs: Util.calVs(req.cookies.BAIDUID)
        }
    },

    /**
     * parseIndex - 结果页参数解析
     */
    parseIndex(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];
        const protocol = xssl ? 'https' : 'http';
        // 时效性
        let srctype = parseInt(query.srctype) || 0;
        let word = query.word;
        let imgurl = query.queryImageUrl;
        // 解密 word 搜索词
        try {
            if (word === undefined || word == 'undefined') {
                word = '';
            } else if (word.push) {
                word = word[0];
            } else {
                word = decodeURIComponent(word);
            }
        } catch (e) {
            word = '';
        }

        return {
            page: 'duturesult',
            // bfe 传递参数同时卸载协议
            Https: xssl ? '1' : '0',
            protocol: protocol,
            // [私密]页面路由用到的参数
            search: req._parsedUrl.search,
            // 1 代表上传图片
            guess: parseInt(query.guess) || 0,
            curUrl: Util.xssFilter(query.curUrl),
            queryImageUrl: Util.decode(imgurl),
            querySign: Util.decode(query.querySign),
            thumbImageUrl: Image.calTimg(imgurl, 'h120', protocol),
            simid: Util.decode(query.simid),
            word: word,
            os: Image.calSign(new Buffer(imgurl)),
            uptype: query.uptype,
            srctype: String(srctype > 0 ? 1 : 0),
            objtype: parseInt(query.objtype) || 0,
            objurl: Util.decode(query.objurl),
            encode: Util.calRedirect(Date.now(), req.cookies.BAIDUID),
            vs: Util.calVs(req.cookies.BAIDUID),
            pn: '0',
            rn: '30'
        };
    },

    /**
     * parseList - 标签页参数解析
     */
    parseTag(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];
        const imgurl = query.queryImageUrl;

        return {
            page: 'dutuicon',
            tagtitle: query.tagtype == 1 ? '该车型的精美图片' : 'Ta的精美图片',
            tagtype: query.tagtype || 0,
            Https: xssl ? '1' : '0',
            protocol: xssl ? 'https' : 'http',
            queryImageUrl: Util.decode(imgurl),
            querySign: Util.decode(query.querySign),
            simid: Util.decode(query.simid),
            query: query.word || '',
            word: query.word || '',
            os: Image.calSign(new Buffer(imgurl)),
            encode: Util.calRedirect(Date.now(), req.cookies.BAIDUID),
            pn: '0',
            rn: '30'
        }
    },

    /**
     * parseSimilar - 相似接口参数
     */
    parseSimilar(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];

        return {
            Https: xssl ? '1' : '0',
            queryImageUrl: Util.decode(query.queryImageUrl),
            querySign: Util.decode(query.querySign),
            simid: query.simid,
            queryType: query.querytype,
            word: query.word,
            pn: query.pn,
            rn: query.rn
        };
    },

    /**
     * parseProduct - 商品接口参数
     */
    parseProduct(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];
        const srctype = parseInt(query.srctype) || 0;
        const protocol = xssl ? 'https' : 'http';

        return {
            Https: xssl ? '1' : '0',
            queryImageUrl: Util.decode(query.queryImageUrl),
            cutImageUrl: Util.decode(query.curUrl),
            querySign: Util.decode(query.querySign),
            thumbImageUrl: Image.calTimg(query.queryImageUrl, 'w100', protocol),
            protocol: protocol,
            word: query.word,
            pn: '0',
            rn: '30',
            objtype: parseInt(query.objtype) || 0,
            pcategory: query.pcategory,
            style: query.style || '',
            srctype: String(srctype > 0 ? 1 : 0),
            encode: Util.calRedirect(Date.now(), req.cookies.BAIDUID)
        };
    },

    /**
     * parseSame - 相同接口参数
     */
    parseSame(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];

        return {
            title: '更多尺寸',
            Https: xssl ? '1' : '0',
            protocol: xssl ? 'https' : 'http',
            queryImageUrl: Util.decode(query.queryImageUrl),
            querySign: Util.decode(query.querySign),
            word: query.word,
            pn: query.pn,
            rn: query.rn,
            ispaizhao: 0,
            simid: query.simid,
            srctype: query.srctype,
            guess: query.guess,
            encode: Util.calRedirect(Date.now(), req.cookies.BAIDUID)
        };
    },

    /**
     * parseSource - 相同来源参数
     */
    parseSource(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];
        const protocol = xssl ? 'https' : 'http';

        return {
            title: '更多来源',
            Https: xssl ? '1' : '0',
            protocol: protocol,
            queryImageUrl: Util.decode(query.queryImageUrl),
            querySign: Util.decode(query.querySign),
            word: query.word,
            simid: query.simid,
            pn: query.pn || '0',
            rn: query.rn || '30',
            ispaizhao: 1,
            encode:  Util.calRedirect(Date.now(), req.cookies.BAIDUID)
        };
    },

    /**
     * parseCar - 汽车参数
     */
    parseCar(req) {
        const query = req.query;
        const xssl = req.headers['x-ssl-header'];

        return {
            Https: xssl ? '1' : '0',
            type: query.type,
            id: query.id,
            provider: query.provider
        };
    },

    /**
     * createTpl - 创建模板需要参数
     */
    createTpl(data) {
        const result = {};

        for (var key in data) {
            result['ui_' + key] = data[key];
        }
        return result;
    },

    /**
     * create - 创建 ral 请求需要的参数
     */
    createRal(name, data) {
        switch (name) {
            case 'card':
                return getCardParam(data);
            case 'same':
                return getSameParam(data);
            case 'simid':
                return getSimidParam(data);
            case 'similar':
                return getSimilarParam(data);
            case 'faceinfo':
                return getFaceinfoParam(data);
            case 'upload':
                return getUploadParam(data);
            case 'car':
                return getCarParam(data);
            case 'product':
                return getProductParam(data);
            case 'wall':
                return getWallpaperParam(data);
            case 'guess':
                return getGuessParam(data);
            case 'baike':
                return getBaikeParam(data);
            case 'alabk':
                return getAlaBkParam(data);
            case 'alacar':
                return getAlaCarParam(data);
            case 'logo':
                return getLogoParam(data);
            case 'pron':
                return getPronParam(data);
            case 'plant':
                return getPlantParam(data);
            case 'search':
                return getSearchParam(data);
            case 'video':
                return getNewVideoParam(data);
            case 'feature':
                return getFeatureParam(data);
            case 'keyword':
                return getKeywordParam(data);
            case 'block':
                return getPhpBlockParam(data);
        }
    }
}

/**
 * getCardParam - card 请求参数
 */
function getCardParam(data) {
    return {
        logID: yog.log.getLogID(),
        degrade: [],
        balanceKey: calBalanceKey(data.querySign),
        data: {
            ip: remoteIp,
            pa: [{
                ct: 'cards',
                cv: [{
                    provider: 'mola',
                    Https: data.Https,
                    srctype: data.srctype,
                    cs: data.querySign,
                    simid: data.simid,
                    os: data.os,
                    query: data.word
                }]
            }]
        }
    };
}

/**
 * getSameParam - same 请求参数
 */
function getSameParam(data) {
    const word = data.word || data.guessword || '';

    return {
        logID: yog.log.getLogID(),
        degrade: [],
        data: {
            Https: data.Https,
            version: 0,
            iswise: 1,
            req_type: 11,
            query_type: data.word ? 2 : 0,
            contsignstr: data.querySign || Image.calSign(data.picture),
            picture: data.picture,
            query: data.word,
            pn: data.pn || '0',
            rn: data.rn || '30',
            simid: data.simid,
            objurl: data.queryImageUrl,
            ispaizhao: data.ispaizhao
        }
    };
}

/**
 * getSimidParam - 获取 simid
 */
function getSimidParam(data) {
    return {
        logID: yog.log.getLogID(),
        degrade: [],
        data: {
            version: 0,
            iswise: 1,
            contsignstr: data.querySign || Image.calSign(data.picture),
            picture: data.picture,
            req_type: 1
        }
    };
}

/**
 * getSimilarParam - similar 请求参数
 */
function getSimilarParam(data) {
    const featureState = data.featureState;
    const picture = data.picture;
    const querySign = data.querySign || Image.calSign(picture);
    const word = data.word;

    let ret = !picture ? {
        logID: yog.log.getLogID(),
        balanceKey: calBalanceKey(word),
        data: {
            ip: remoteIp,
            pa: [{
                ct: 'simi',
                cv: [{
                    Https: data.Https,
                    provider: 'piclist',
                    type: 'list',
                    query: word,
                    SimiCs: querySign,
                    pn: data.pn,
                    rn: data.rn,
                    os: data.os,
                    srctype: '0'
                }]
            }]
        }
    } : {
        logID: yog.log.getLogID(),
        balanceKey: calBalanceKey(querySign),
        data: {
            ip: remoteIp,
            pa: [{
                ct: 'upsimi',
                cv: [{
                    Https: data.Https,
                    provider: 'piclist',
                    type: 'list',
                    picbin: picture,
                    simid: data.simid || '0,0',
                    SimiCs: querySign,
                    pn: data.pn,
                    rn: data.rn,
                    query: word,
                    query_type: data.queryType || '0',
                    is_multi: '0',
                    nodrop: '1',
                    srctype: '0'
                }]
            }]
        }
    };

    // 加入特征库数据
    if (featureState && featureState.status == 0) {
        ret.data.pa[0].cv[0].feature_flg = '1';
        ret.data.pa[0].cv[0].feature_dim = '' + featureState.dim;
        ret.data.pa[0].cv[0].feature_raw = featureState.feature;
        ret.data.feat_class_name = featureState.topn_class_prob;
    }

    return ret;
}


/**
 * getSearchParam - tag 页
 */
function getSearchParam(data) {
    return {
        headers: {
            'x-ssl-header': data.https
        },
        path: '/search/wisejsonala',
        data: {
            tn: 'wisejsonala',
            ie: 'utf-8',
            iswiseala: 0,
            word: data.word,
            pn: data.pn || 0,
            rn: data.rn || 30
        }
    };
};

/**
 * getFaceinfoParam - faceinfo 请求参数
 */
function getFaceinfoParam(data) {
    return {
        logID: yog.log.getLogID(),
        degrade: [],
        data: {
            picture: data.picture,
            contsign: data.querySign,
            req_type: 1
        }
    };
}

/**
 * getUploadParam - uploadImage 请求参数
 */
function getUploadParam(data) {
    return {
        data: {
            cmd_no: 500,
            product_token: 'wantu',
            idc_token: 'cn',
            pic_data: data.picture
        }
    };
}

/**
 * getFaceParam - face 请求参数
 */
function getFaceParam(data) {
    return {
        data: {
            type: 'st_shitu',
            cmdid: '0x1002',
            encoding: 0,
            ct: 1,
            appid: '20001',
            tag: 1,
            issort: 0,
            sort: 0,
            objurl: data.queryImageUrl,
            querysign: data.querySign,
            pn: data.pn,
            rn: data.rn,
            clientip: remoteIp
        }
    };
}

/**
 * getProductParam - product 请求参数
 */
function getProductParam(data) {
    let path = '/imageproduct/1.0.0/search/';
    let shixiao = data.srctype;
    let imagedata;

    if (data.objtype) {
        path += 'csimg?shixiao=' + shixiao + '&objecttype=' + data.objtype + '&appid=20001';
        imagedata = data.querySign;
    } else {
        path += 'uploadimg?shixiao=' + shixiao + '&objecttype=' + data.objtype + '&appid=20001';
        imagedata = data.picture.toString('base64');
    }

    return {
        logID: yog.log.getLogID(),
        path: path,
        degrade: [],
        data: {
            params: {
                searchflag: 1,
                gender: -1,
                codetype: 0,
                imagedata: imagedata,
                startposition: data.pn,
                resultnum: data.rn,
                sortbyprice: data.sort,
                texts: {
                    textcategory: data.pcategory,
                    word: ''
                }
            }
        }
    };
}

/**
 * getWallpaperParam - 壁纸请求参数
 */
function getWallpaperParam(data) {
    return {
        logID: yog.log.getLogID(),
        degrade: [],
        data: {
            req_type: 10,
            query_type: 1,
            iswise: 1,
            contsign: data.querySign,
            contsignstr: data.querySign,
            picture: data.picture,
            query: data.word,
            screen_width: data.screenwidth,
            screen_height: data.screenheight,
            simid: data.simid
        }
    };
}

/**
 * getGuessParam - 在线猜词请求参数
 */
function getGuessParam(data) {
    return {
        degrade: [],
        data: {
            jsonrpc: '2.0',
            method: 'Process',
            params: [{
                type: 'st_shitu',
                appid: '20001',
                cmdid: '0x1005',
                clientip: remoteIp,
                versionnum: '1.0.0',
                ct: 0,
                image: data.picture.toString('base64'),
                querysign: data.querySign,
                text: data.word,
                pn: 0,
                rn: 3,
                tag: 1,
                filter: 0,
                sort: 0,
                issort: 1
            }]
        }
    };
}

/**
 * getAlaParam - 新阿拉丁百科请求参数
 */
function getAlaBkParam(data) {
    const req = data.req;
    return {
        balanceKey: calBalanceKey(data.guessword || ''),
        degrade: [],
        data: {
            ip: remoteIp,
            agent: req.headers['user-agent'],
            referer: req.headers.referer,
            cookie: req.cookies,
            pa: [{
                ct: 'ps_data',
                cv: [{
                    provider: 'ps',
                    type: 'common',
                    Https: data.Https,
                    keyword: data.guessword,
                    cs: data.querySign
                }]
            }]
        }
    };
}

/**
 * getBaikeParam - 百科词条服务
 */
function getBaikeParam(data) {
    return {
        degrade: [],
        data: {
            wd: data.word,
            rn: 20,
            tn: 'SE_visshitujson_rmh34hkm'
        }
    };
}

/**
 * getPronParam - 黄图删除
 */
function getPronParam(data) {
    return {
        degrade: [],
        data: {
            picurl: data.picUrl,
            pic_id: data.picId
        }
    }
}

/**
 * getPlantParam - 植物垂类请求参数
 */
function getPlantParam(data) {
    const featureState = data.featureState;
    let ret = {
        logID: yog.log.getLogID(),
        degrade: [],
        balanceKey: calBalanceKey(data.querySign),
        data: {
            picbin: data.picture,
            https: data.Https
        }
    };

    // 加入特征库数据
    if (featureState && featureState.status == 0) {
        ret.data.feature_flg = '1';
        ret.data.feature_dim = '' + featureState.dim;
        ret.data.feature_raw = featureState.feature;
    }

    return ret;
}

/**
 * getLogoParam - 品牌logo请求参数
 */
function getLogoParam(data) {
    return {
        degrade: [],
        balanceKey: calBalanceKey(data.querySign),
        data: {
            ip: IP.address(),
            pa: [{
                ct: 'idl_card',
                cv: [{
                    cs: data.querySign,
                    Https: data.Https,
                    provider: 'data',
                    uptype: data.uptype,
                    classify_type: 'logo',
                    picbin: data.picture
                }]

            }]
        }
    };
}

/**
 * getCarParam - 汽车请求参数
 */
function getCarParam(data) {
    return {
        degrade: [],
        balanceKey: calBalanceKey(data.id),
        data: {
            ip: IP.address(),
            pa: [{
                ct: data.type,
                cv: [{
                    provider: data.provider,
                    id: data.id,
                    Https: data.Https
                }]
            }]
        }
    };
}

/**
 * getNewVideoParam - 新视频请求参数
 */
function getNewVideoParam(data) {
    const keyword = data.guessword;
    const req = data.req;

    return {
        logID: yog.log.getLogID(),
        balanceKey: calBalanceKey(keyword),
        degrade: [],
        data: {
            ip: IP.address(),
            agent: req.headers['user-agent'],
            referer: req.headers.referer,
            cookie: req.cookies,
            pa: [{
                ct: 'ps_data',
                cv: [{
                    provider: 'ps',
                    type: 'video',
                    Https: data.Https,
                    keyword: keyword,
                    picture: data.picture,
                    cs: data.cs,
                    titleraw: data.titleraw,
                    descraw: data.descraw,
                    fromraw: data.fromraw,
                    titleMatch: data.titleMatch,
                    descMatch: data.descMatch
                }]
            }]
        }
    };
}

/**
 * getAlaCar - 阿拉丁汽车
 */
function getAlaCarParam(data) {
    return {
        degrade: [],
        balanceKey: calBalanceKey(data.querySign),
        data: {
            ip: IP.address(),
            pa: [{
                ct: 'idl_card',
                cv: [{
                    cs: data.querySign,
                    provider: 'data',
                    uptype: data.uptype,
                    classify_type: 'car',
                    Https: data.Https,
                    picbin: data.picture
                }]
            }]
        }
    };
}

/**
 * getFeatureParam - 特征值请求
 */
function getFeatureParam(data) {
    return {
        logID: yog.log.getLogID(),
        degrade: [],
        data: {
            picture: data.picture,
            calc_type: 0
        }
    };
}

/**
 * getKeywordParam - 主动猜词请求参数
 */
function getKeywordParam(data) {
    const param = {
        logID: yog.log.getLogID(),
        degrade: [],
        data: {
            picture: data.picture,
            simid: data.simid,
            contsign: data.querySign
        }
    };

    if (data.info) {
        param.data['reqtype'] = 4;
        param.data['info'] = data.info
    } else {
        param.data['reqtype'] = 3;
    }

    return param;
}

/**
 * getPhpBlockParam - 色敏屏蔽接口
 */
function getPhpBlockParam(data) {
    return {
        headers: {
            'Referer': 'http://image.baidu.com',
        },
        path: 'n/redis',
        data: {
            from: 'nodejs',
            queryurl: data.queryImageUrl,
            contsign: data.querySign,
            simid: data.simid
        }
    };
};

/**
 * calBalanceKey - 计算 hashring 的 key
 * @param {string} key
 */
function calBalanceKey(key) {
    let md5key = Md5(key);
    let hashkey = 0;

    for (let i = 0; i < 8; i++) {
        hashkey = hashkey * 16 + getDecimalVal(md5key[i]);
    }

    return hashkey;
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

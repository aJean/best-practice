import getCase from '../model/caseModel';
import * as Util from '../lib/util';
import * as _ from 'lodash';
const picsdk = require('picsdk').pic;

/**
 * checkProduct - 商品卡片
 */
export function checkProduct(productState, result) {
    try {
        const data = productState.data;

        result['ui_product'] = data;
        result['ui_productNum'] = data.totalrecord;
    } catch(e) {}
}

/**
 * 检测新百科和在线猜词
 */
export function checkExtraRequest(responseList, result) {
    let faceBaike = responseList[0];
    let imgSate = responseList[1];
    let guessState = responseList[2];

    // 在线猜词
    checkKeyword(result, guessState);

    if (faceBaike && faceBaike.data && faceBaike.data.length) {
        // 匹配相似度最高的一项数据
        let baike = Util.getMaxBy(faceBaike.data, 'ratio');
        let faceurl = picsdk.pid2Url({
            productName: 'image',
            picSpec: Util.calFace(faceBaike.face_info),
            picId: String(imgSate.pic_id)
        });

        try {
            result['ui_baike'] = {
                faceUrl: faceurl,
                querySign: imgSate.sign0 + ',' + imgSate.sign1,
                ratio: baike.ratio,
                data: JSON.parse(baike.baike)
            };

            result['ui_Https'] && Util.httpsFace(result['ui_baike']);
        } catch (e) {}
    }
}

/**
 * 随机抽取案例
 */
export function checkCase(result) {
    const num = Math.floor(Math.random() * 6);
    result['ui_case'] = getCase(num);
    result['ui_caseList'] = getCase();
}

/**
 * 更多尺寸
 */
export function checkSame(sameState, result) {
    if (sameState) {
        result['ui_same'] = sameState.data;
        result['ui_sameNum'] = sameState.total_num;
    }
}

/**
 * checkSimilar - 相似图片
 */
export function checkSimilar(similarState, result) {
    if (similarState.flag === 0) {
        result['ui_similar'] = similarState['upsimi'];
        result['ui_similarNum'] = similarState['upsimi']['total_num'];
    }
}

/**
 * 植物 & 动物垂类卡片
 */
export function checkPlant(plantState, result) {
    if (plantState.term_num > 0) {
        // 转换数据格式
        plantState.terms.forEach(function(data, index) {
            const imgs = [];
            for (let i = 0; i < data.cs_num; i++) {
                const smallImg = 'small_' + i;
                const bigImg = 'big_' + i;

                imgs.push({
                    smallImg: data[smallImg],
                    bigImg: data[bigImg]
                });
            }
            plantState.terms[index].imgs = imgs;
            plantState.terms[index].baike = data.baike ? JSON.parse(data.baike) : {};
        });

        result['ui_plant'] = plantState.terms;
        result['ui_plantNum'] = plantState.term_num;
        result['ui_plantFlag'] = plantState.flag_prompt;
        result['ui_plantClass'] = plantState.class;
    }
}

/**
 * 品牌logo
 */
export function checkLogo(logoState, result) {
    if (logoState.idl_card && logoState.flag == 0) {
        result['ui_logo'] = logoState.idl_card;
    }
}

/**
 * 生成 ui_source 图片来源
 */
export function checkSource(cardState, sameState, result) {
    let sourceState = [];

    if (cardState && cardState.cards) {
        let simidInfo = cardState.cards['simid_info'];
        // 同主题图片
        if (simidInfo && simidInfo['pic_set'] && simidInfo['pic_set']['cont'] && simidInfo['pic_set']['cont'].length) {
            sourceState = sourceState.concat(simidInfo['pic_set']['cont'].slice(0, 1));
        }
        // 资讯
        if (simidInfo && simidInfo['acti'] && simidInfo['acti']['cont'] && simidInfo['acti']['cont'].length) {
            sourceState = sourceState.concat(simidInfo['acti']['cont'].slice(0, 2));
        }
    }

    if (sameState && sameState.data && sameState.data.length) {
        sourceState = sourceState.concat(sameState.data);
    }

    sourceState.forEach(function (data) {
        if (data.dbg) {
            data.isZx = true;
            data.time = data.time.split(' ')[0];
        } else if (data.cs) {
            data.isSet = true;
            // 不够三张不显示
            (data.cs.length < 3) && sourceState.shift();
        }
    });

    result['ui_source'] = Util.unDuplicate(sourceState, 'fromURL');
    result['ui_sourceNum'] = sourceState.length;
}

/**
 * 检测壁纸
 */
export function checkWallpaper(query, result) {
    if (/壁纸|bizhi|手机墙纸|主题桌面/g.test(query)) {
        result['ui_wallpaper'] = 1;
    }
}

/**
 * 解析 card server 深度信息数据
 */
export function checkCardServer(state, result) {
    if (state.flag == 0) {
        result['ui_card'] = state['cards'];
        const simiInfo = state['cards'].simid_info;
        
        // 重组旧的汽车卡片
        try {
            let carList = [];
            simiInfo.service.cont.forEach(function (data) {
                if (data.provider == 'yiche') {
                    data.provider = 'bitauto';
                    carList.push(data);
                }
            });

            result['ui_oldCar'] = carList;
        } catch(e) {}
        // info card 详情
        try {
            result['ui_desc'] = simiInfo.desc.cont && simiInfo.desc;
        } catch(e) {}
    }
}

/**
 * 检测 keyword 服务
 */
export function checkKeyword(guessState, result) {
    try {
        result['ui_guessWord'] = guessState.keywords[0].word;
    } catch (e) {

    } finally {
        result['ui_queryType'] = result.ui_word ? 0 : (result.ui_guessWord ? 1 : 0);
    }
}

/**
 * 检测 cardstate 离线猜词, 负责设置默认值避免 swig parse 后 diff
 */
export function checkOfflineGuess(cardState, result) {
    result['ui_guessWord'] = '';

    try {
        let tags = cardState.cards.simid_info.tags;
        let guessList = tags['keyword-cont2'];

        if (guessList && guessList.length) {
            guessList = Util.filterOffGuess(guessList);
        }

        if (!guessList) {
            guessList = tags['keyword-cont'] && tags['keyword-cont'][0];
        }

        return (result['ui_guessWord'] = guessList[0].keyword);
    } catch (e) {}
}

/**
 * checkAlaBaike - ala 百科卡片
 */
export function checkAlaBaike(alaState, result) {
    try {
        const uicard = result['ui_card'];
        if (!(uicard && uicard['simid_info'] && uicard['simid_info']['star_entity']) && !result['ui_baike']) {
            result['ui_alaBaike'] = alaState['ps_data']['ps_data_cont'][0];
        }
    } catch (e) {}
}

/**
 * checkAlaCar - ala 汽车
 */
export function checkAlaCar(carState, result) {
    try {
        const data = carState['idl_card']['car_result'];
        const list = [];
        const keys = {};
        // 去重
        _.forEach(data, item => {
            if (item.length) {
                const key = item[0].key;
                if (!keys[key]) {
                    keys[key] = true;
                    list.push(item);
                }
            }
        });

        result['ui_alaCar'] = list;
    } catch (e) {}
}

/**
 * ala 视频卡片
 */
export function checkVideo(videoState, result) {
    try {
        const seclass = videoState.seclass;
        if (seclass == '电视剧') {
            videoState.vlink = videoState.vlink[0].wiselinkurl;
        } else if (seclass == '电影') {
            videoState.vlink = videoState.vlink;
        } else if (seclass == '综艺') {
            videoState.vlink = videoState.vlink[0].url;
        } else if (seclass == '动漫') {
            videoState.vlink = videoState.vlink[0].wiselinkurl;
        }
        videoState.actor && (videoState.actor = videoState.actor.split('$').join(' '));
        result['ui_video'] = videoState;
    } catch (e) {}
}

/**
 * 检测人工屏蔽
 */
export function checkPhpBlock(phpBlock) {
    const result = {shouldBlock: false};

    try {
        let obj = phpBlock.data.filter;
        _.forEach(obj, val => {
            if (val == 1) {
                result.shouldBlock = 1;
            }
        });
        return result;
    } catch (e) {
        return result;
    }
}

/**
 * 页面关键 url 拼接
 */
export function checkPageUrl(result) {
    const word = result.ui_word || result.ui_guessWord;
    const imgurl = encodeURIComponent(result.ui_queryImageUrl);
    const sign = encodeURIComponent(result.ui_querySign);

    result['ui_queryType'] = result.ui_word ? 0 : (result.ui_guessWord ? 1 : 0);
    // 相似请求地址
    result['ui_simiServer'] = '/wiseshitu/a_similar?rn=30&queryImageUrl=' + imgurl
        + '&querySign=' + sign + '&simid=' + result.ui_simid + '&word=' + word
        + '&uptype=' + result.ui_uptype + '&https=' + result.ui_Https
        + '&querytype=' + result.ui_queryType + '&pn=';
    // 外站跳转地址
    result['ui_redirect'] = 'http://image.baidu.com/search/wiseredirect?tn=wiseredirect&vs=' + result['ui_vs'] + '&queryurl=' + imgurl + '&juid=' + result['ui_encode'].juid + '&sign=' + result['ui_encode'].sign + '&page=duturesult';
    // 速度统计
    result['ui_speed'] = result.ui_protocol
        + '://imgstat.baidu.com/6.gif?_dev=wise&speed=shitu'
        + '&wd=' + result.ui_query + '&queryurl=' + result.ui_queryImageUrl
        + '&cs=' + result.ui_querySign + '&uptype=' + result.ui_uptype
        + '&shituvs=' + result.ui_shituvs + '&pos=3';
}

/**
 * 无结果情况, 需要返回值
 */
export function interruptNoresult(result, type) {
    const msg = type == 1 ? '未找到该图片的相关信息' :
        '根据相关法律法规和政策，部分搜索结果未予显示';

    result['ui_noresult'] = 1;
    result['ui_noMsg'] = msg;
    return result;
}


/**
 * 识图结果页数据打包
 * @param {any} data    ral 数据集合
 * @param {any} result  initState 源数据
 */
export function resultPacker(data, result) {
    const cardData = data[0];
    const sameData1 = data[1];
    const sameData2 = data[2];
    const simiData = data[3];
    const plantData = data[4];
    const alaBaikeData = data[5];
    const productData = data[6];
    
    // card server 内容处理
    checkCardServer(cardData, result);
    // 相同尺寸数据
    checkSame(sameData1, result);
    // 图片来源数据
    checkSource(cardData, sameData2, result);
    // 相似
    checkSimilar(simiData, result);
    // 植物卡片
    checkPlant(plantData, result);
    // ala 视频
    checkVideo(sameData2['ui_video'], result);
    // ala 百科
    checkAlaBaike(alaBaikeData, result);
    // 商品卡片
    checkProduct(productData, result);
    // 人脸百科 & 在线猜词
    // checkExtraRequest(data.slice(5), result);
    // 页面请求 server
    checkPageUrl(result);
}
/**
 * @file debug 同步接口, 只显示 json 数据
 */
'use strict';

import * as Image from '../lib/image';
import Params from '../lib/param';
import Result from '../lib/result';
import Source from '../lib/source';

export default async function (req) {
    const data = Params.parseIndex(req);
    const result = Params.createTpl(data);
    const myreq = {};

    // 先下载图片, 如果失败进入无结果页
    let picture;
    try {
        picture = await Image.curlImage(data.queryImageUrl);
        data['picture'] = picture;
        data['querySign'] = Image.calSign(picture);
    } catch (e) {
        return {myreq, result};
    }

    // 如果没有 url simid 就用 same 接口计算的
    if (!parseInt(data.simid)) {
        const sameData = await Source.fetch('simid', data);
        if (sameData.simid) {
            data.simid = result['ui_simid'] = sameData.simid;
        }
    }
    // 优先请求: 所有卡片 + 图中人物 + 离线猜词
    const cardState = await Source.fetch('card', data);
    const guessword = Result.checkOfflineGuess(cardState, result);
    let personBaike;

    // 所有卡片 + 图中人物数据
    if (cardState && cardState.cards && cardState.cards.simid_info) {
        personBaike = cardState.cards.simid_info.star_entity;
        Result.checkCar(cardState.cards, result);
    }

    myreq['same0'] = Object.assign({}, data, {ispaizhao: 0, guessword});
    myreq['same1'] = Object.assign({}, data, {ispaizhao: 1, guessword});
    // 并发请求
    const allRequest = [{name: 'same', param: myreq['same0']},
        {name: 'same', param: myreq['same1']},
        {name: 'alabk', param: Object.assign({}, data, {req, guessword})},
        {name: 'alacar', param: data},
        {name: 'plant', param: data},
        {name: 'logo', param: data}
    ];
    // 没有离线百科并且是用户上传
    if (!personBaike && data.guess == 1) {
        allRequest.push({name: 'faceinfo', param: data});
        allRequest.push({name: 'upload', param: data});
        // 没有离线猜词, 请求在线猜词
        if (!guessword) {
            allRequest.push({name: 'guess', param: data});
        }
    }

    const allResponse = await Source.fetchAll(allRequest);
    const sameState2 = allResponse[1];

    // 阿拉丁百科
    Result.checkAlaBaike(allResponse[2], result);
    // 阿拉丁汽车
    Result.checkAlaCar(allResponse[3], result);
    // logo
    Result.checkLogo(allResponse[5], result);
    // 视频卡片数据
    Result.checkVideo(sameState2['ui_video'], result);
    // 相同尺寸数据
    Result.checkSame(allResponse[0], result);
    // 图片来源数据
    Result.checkSource(cardState, sameState2, result);
    // 壁纸数据
    Result.checkWallpaper(data.word, result);
    // 更多案例数据
    Result.checkCase(result);
    // 新百科 + 在线猜词
    Result.checkExtraRequest(allResponse, result);
    // 植物垂类
    Result.checkPlant(allResponse[4], result);

    return {myreq, result};
};

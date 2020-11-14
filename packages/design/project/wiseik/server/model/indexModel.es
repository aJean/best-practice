/**
 * @file 识图结果页总数据接口
 */
'use strict';

import * as Image from '../lib/image';
import * as Result from '../lib/result';
import Params from '../lib/param';
import Source from '../lib/source';

export default async function (req) {
    const data = Params.parseIndex(req);
    const result = Params.createTpl(data);
    const imgurl = data.queryImageUrl;
    const picture = await Image.curlImage(imgurl);
    
    // 更多案例数据
    Result.checkCase(result);
    try {
        data['picture'] = picture;
        result['ui_querySign'] = data['querySign'] = Image.calSign(picture);
    } catch (e) {
        return Result.interruptNoresult(result, 1);
    }

    // 如果没有 url simid 就用 same 接口计算的
    if (!parseInt(data.simid)) {
        let sameState = await Source.fetch('simid', data);
        if (sameState.simid) {
            data.simid = result['ui_simid'] = sameState.simid;
        }
    }

    // 检测屏蔽图片
    let blockState = Result.checkPhpBlock(await Source.fetch('block', data));
    if (blockState.shouldBlock) {
        return Result.interruptNoresult(result, 2)
    }
    // prefetch card server
    let responses = await Source.fetchAll([
        {name: 'card', param: data},
        {name: 'feature', param: {picture}}
    ]);
    const cardState = responses[0];
    data['featureState'] = responses[1];
    // 离线猜词
    const guessword = Result.checkOfflineGuess(cardState, result);
    const requests = [
        {name: 'same', param: merge(data, {ispaizhao: 0, guessword})},
        {name: 'same', param: merge(data, {ispaizhao: 1, guessword})},
        {name: 'similar', param: data},
        {name: 'plant', param: data},
        {name: 'alabk', param: merge(data, {req, guessword})},
        {name: 'product', param: data}
    ];
    // 没有离线猜词
    if (!guessword && data.guess == 1) {        
        requests.push({name: 'keyword', param: data});
    }
    // 并发其它请求
    responses = await Source.fetchAll(requests);
    responses.unshift(cardState);
    Result.resultPacker(responses, result);

    return result;
};

function merge(target, source) {
    return Object.assign({}, target, source);
}

/**
 * @file similar 相似数据接口
 */
'use strict';

import Params from '../lib/param';
import Source from '../lib/source';
import {curlImage} from '../lib/image';

export default async function (req) {
    let data = Params.parseSimilar(req);
    let picture = await curlImage(data.queryImageUrl);
    let similarState;

    // 特征值服务
    data.featureState = await Source.fetch('feature', {picture});    
    // 图 + 文 simi 接口
    if (data.uptype == 'qsearch' && data.word) {
        similarState = await Source.fetch('similar', data);

        if (similarState.flag == -1 || (similarState.simi && !similarState.simi.result) || (similarState.upsimi && !similarState.upsimi.result)) {
            data.picture = picture;            
            similarState = await Source.fetch('similar', data);
        }
    } else {
        // upsimi 接口
        data.picture = picture;
        similarState = await Source.fetch('similar', data);
    }

    return similarState;
};
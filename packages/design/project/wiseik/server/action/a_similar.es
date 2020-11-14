/**
 * @file 获取相似数据 action
 */

import getSimilar from '../model/similarModel';
import {getSimilarError} from '../lib/error';

export default async function(req, res) {
    try {
        let similarState = await getSimilar(req);

        if (similarState.flag == 0) {
            similarState = similarState.simi || similarState.upsimi;
            similarState.errno = 0;
            res.json(similarState);
        } else {
            res.json(getSimilarError('no data'));
        }
    } catch (e) {
        res.json(getSimilarError('service error'));
    }
};
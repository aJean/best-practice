import {getRouterError} from '../lib/error';
import ReactRenderAction from '../lib/reactRender';
import getIndexDebug from '../model/indexDebugModel';
import getIndex from '../model/indexModel';

/**
 * @file 识图结果页 action
 */

class ResultAction extends ReactRenderAction {
    async getInitialState(req) {
        let data;

        if (req.query.debug != 'skt1') {
            data = await getIndex(req);
            data['ui_noresult'] ? res.render('wiseik/page/noresult.tpl', data) : res.render('wiseik/page/result.tpl', data);
        } else {
            // debug 模式, 只输出数据
            data = await getIndexDebug(req);
            res.send(data);
        }
        return  data;  
    }
}

export default (new ResultAction).render;

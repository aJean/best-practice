import {checkRouter} from './util';
import {getRouterError} from './error';
import {matchPath} from 'wiseik:node_modules/react-router';
import Root from 'wiseik:widget/server.tsx';

/**
 * @file ssr react action
 */

export default class ReactRenderAction {
    constructor() {
        this.render = this.render.bind(this);
    }

    async getInitialState(req) {
        return {};
    }

    async render(req, res, next) {
        // router 不合法, 跳转 nginx 404 页
        if (!checkRouter(req.query)) {
            res.status(404);
            res.send(getRouterError('illegal query'));
            return;
        }

        const data = convertState(await this.getInitialState(req));
        // url 需要加模块名, 与前端保持一致
        const url = '/' + req.CURRENT_APP + req.url;
        // react ssr 执行
        const ssr = Root(url, data);
        res.render('wiseik/page/result.tpl', {
            result: data,
            ssr: ssr
        });
    }
}

/**
 * 生成与 client 一样的数据结构
 */
function convertState(data) {
    return {
        // 公共信息 ICommon interface
        'ui_common': {
            // react router 参数
            _search: data['ui_search'],
            guess: data.ui_guess,
            // https 参数            
            https: data['ui_Https'],
            protocol: data['ui_protocol'],
            querySign: data['ui_querySign'],
            cutImageUrl: data['ui_cutImageUrl'],
            queryImageUrl: data['ui_queryImageUrl'],
            thumbImageUrl: data['ui_thumbImageUrl'],
            word: data['ui_word'],
            simid: data['ui_simid'],
            // 词文的大图页 type 设置
            uptype: data['ui_uptype'],
            // 时效性
            srctype: data['ui_srctype'],
            // 商品
            objtype: data['ui_objtype'],
            // 猜词
            guessWord: data['ui_guessWord'],
            queryType: data['ui_queryType'],
            // 转码 vs
            vs: data['ui_vs'],
            // 转码地址
            urlRedirect: data['urlRedirect'],
            encode: data['ui_encode'],
            // case
            caseurl: data['ui_case']['url'],
            caseimg: data['ui_case']['img'],
            // simi url
            simiServer: data['ui_simiServer'],
            // redirect url
            redirectUrl: data['ui_redirect'],
            // info desc
            desc: data['ui_desc'],
            // speed 统计
            speedUrl: data['ui_speed']
        },
        // 案例
        'ui_caseList': data['ui_caseList'],
        // 相似
        'ui_similar': {
            all: data['ui_similar']['result'],
            data: data['ui_similar']['result'],
            total: data['ui_similar']['total_num'],
            tags: data['ui_similar']['multi_tags']
        },
        // 来源
        'ui_source': {
            list: data['ui_source'],
            total: data['ui_sourceNum']
        },
        // 相同
        'ui_same': {
            list: data['ui_same'],
            total: data['ui_sameNum']
        },
        // 植物
        'ui_plant': {
            list: data['ui_plant'],
            total: data['ui_plantNum'],
            flag: data['ui_plantFlag'],
            class: data['ui_plantClass']
        },
        // 视频
        'ui_video': data['ui_video'],
        // 商品
        'ui_product': {
            data: data['ui_product'],
            total: data['ui_productNum']
        }
    };
}
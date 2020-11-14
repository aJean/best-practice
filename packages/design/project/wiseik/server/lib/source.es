import Params from './param';

/**
 * @file source - 资源请求类
 */

const SERVICE = {
    'card': 'CARDSERVER',
    'similar': 'CARDSERVER',
    'same': 'SAMELIST',
    'simid': 'SAMELIST',
    'wall': 'WALLPAPER',
    'car': 'CARDSERVER',
    'faceinfo': 'FACEBAIKE',
    'upload': 'IMGUPLOAD',
    'product': 'PRODUCT',
    'guess': 'GUESSONLINE',
    'pron': 'PRON',
    'plant': 'CARDSERVER',
    'search': 'PHPSERVICE',
    'block': 'PHPSERVICE',
    'alabk': 'CARDSERVER',
    'alacar': 'CARDSERVER',
    'logo': 'CARDSERVER',
    'feature': 'FEATURE',
    'keyword': 'KEYWORD'
};

export default {

    /**
     * fetch - 发起 ral 请求
     *
     * @param  {string} name 服务名称
     * @param  {Object} data    参数对象
     * @return {Object}         Promise
     */
    fetch(name, data) {
        return yog.ralP(SERVICE[name], Params.createRal(name, data));
    },


    /**
     * fetchAll - 并发 ral 请求
     * @param  {Array} list    请求服务列表
     * @param  {Array} models  请求模块列表
     *
     * @return {Object}      Promise
     */
    fetchAll(list, models) {
        const requests = [];

        for (let item of list) {
            if (!item) {
                requests.push(null);
                continue;
            }

            const name = item.name;
            const params = Params.createRal(name, item.param);
            requests.push(yog.ralP(SERVICE[name], params));
        }

        if (models) {
            for (let model of models) {
                requests.push(model);
            }
        }

        return Promise.all(requests);
    }
}

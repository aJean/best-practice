/**
 * @file client util
 */

const RouterMap = {
    case: '/wiseik/p_case',
    feedback: '/wiseik/p_feedback',
    detail: '/wiseik/p_detail'
};

export default {
    /**
     * 时间转化
     */
    timeConvert(str) {
        const date = new Date(str);
        const month = date.getMonth() + 1;

        return `${date.getFullYear()}-${month}-${date.getDate()}`;
    },


    /**
     * 页面 react-router link path
     * @param {ICommon} data
     */
    getRouterPath(name, data) {
        return {
            pathname: RouterMap[name],
            search: data._search
        };
    }
}
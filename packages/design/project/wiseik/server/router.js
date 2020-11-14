/**
 * @file
 */
'use strict';

module.exports = function (router) {
    /* a restful api example
    router.route('/method/:id')
        .put(router.action('method').put)
        .get(router.action('method').get)
        .post(router.action('method').post); */

    router.get('/', router.action('p_home'));
    // only one action 
    router.get('/p_feedback', router.action('p_result'));
    router.get('/p_case', router.action('p_result'));
    router.get('/p_detail', router.action('p_result'));  
};

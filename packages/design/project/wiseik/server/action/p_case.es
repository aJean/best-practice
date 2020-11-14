/**
 * @file 案例展示 action
 */
'use strict';

import getCase from '../model/caseModel';

export default async function(req, res) {
    const caseState = {
        'ui_case': getCase(),
        'ui_title': '你可以做这些',
        'refer': req.headers['referer'],
        'ui_protocol': req.headers['x-ssl-header'] == 1 ? 'https' : 'http'
    };

    res.render('wiseik/page/case.tpl', caseState);
};

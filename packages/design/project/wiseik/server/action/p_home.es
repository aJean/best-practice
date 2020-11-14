import Params from '../lib/param';

/**
 * @file home page action
 */

export default async function(req, res) {
    const data = Params.parseHome(req);
    const result = Params.createTpl(data);
    
    res.render('wiseik/page/home.tpl', result);
};

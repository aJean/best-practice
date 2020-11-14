/**
 * @file sweb日志发送
 */

(function ($) {
    'use strict';
    
    var data = bd['ui_common'];
    var protocol = data.protocol;
    var config = {
        pid: 322,
        type: 2013,
        app: 'wise',
        tn: 'wisedutu',
        ptype: 'webapp',
        page: 'duturesult',
        samplekey: data.SAMPLEKEY,
        vs: data.vs,
        wd: encodeURIComponent(data.word),
        queryurl: encodeURIComponent(data.queryImageUrl),
        cs: encodeURIComponent(data.querySign),
        ishttps: data.https
    };

    var speedConfig = {
        _dev: 'wise',
        speed: 'shitu',
        wd: encodeURIComponent(data.word)
    };

    var serialize = function (obj) {
        var query = '';
        for (var key in obj) {
            if (obj[key]) {
                query += (!query ? '' : '&') + key + '=' + obj[key];
            }
        }
        return query;
    };

    var sendLog = function(url) {
        return function(opts) {
            var img = new Image();
            var params = $.extend({}, config, opts);
            img.src = url + '?' + serialize(params) + '&_=' + Date.now();
        };
    };

    var sendSpeedLog = function (url) {
        return function(opts) {
            var img = new Image();
            var params = $.extend({}, speedConfig, opts);
            img.src = url + '?' + serialize(params) + '&_=' + Date.now();
        };
    }

    window.NsLog = {
        // 7.gif 日志
        sendLog: sendLog(protocol + '://imgstat.baidu.com/7.gif'),
        // pv 日志
        pvLog: sendLog(protocol + '://image.baidu.com/pv/pv1.gif'),
        //性能 日志
        speedLog: sendSpeedLog(protocol + '://imgstat.baidu.com/6.gif')
    };

})(Zepto);

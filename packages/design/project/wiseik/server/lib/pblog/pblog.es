/**
 * @file 打印 pb 日志
 */
'use strict';

const fs = require('fs');
const b2log = require('b2log/b2log');
const ProtoBuf = require('protobufjs');
const url = fs.readFileSync(__dirname + '/SwebNodejs.proto').toString(),
const pkg = ProtoBuf.loadProto(url).build('baidu.imagesearch'),

const SwebNodejs = pkg.SwebNodejs,
const Common = pkg.Common;
const Cuid = pkg.CookieUserid;
const Vi = pkg.ViewInfo;
const Hsi = pkg.HttpServiceInfo;
let instance;

export function sendPbLog(req) {
    // 不在 YOG_DEBUG 环境输出日志
    if (yog.DEBUG) {
        return;
    }

    const headers = req.headers;
    const cookies = req.cookies;
    const time = Date.now();

    const common = new Common();
    const snj = new SwebNodejs();
    const cuid = new Cuid();
    const vi = new Vi();
    const hsi = new Hsi();

    cuid.set('baiduid', cookies.BAIDUID || '');

    vi.set('page_url', req.originalUrl || '');
    vi.set('referer', req.query.refer || '');

    hsi.set('user_agent', headers['user-agent']|| '');
    hsi.set('http_version', req.httpVersion || '');

    common.set('cookie_userid', cuid);
    common.set('view_info', vi);
    common.set('http_service_info', hsi);
    common.set('logid', headers.logid || '');
    common.set('timestamp', time);

    snj.set('common', common);
    snj.set('bfe_logid', headers.logid || '');
    snj.set('bduss', cookies.BDUSS || '');
    snj.set('request_time', time);
    snj.set('request_uri', req.originalUrl || '');

    const buffer = snj.encode().toBuffer();

    if (!instance) {
        instance = new b2log.B2logNode(__dirname + '/b2log.conf');
    }
    instance.b2log_write('baidu.imagesearch.SwebNodejs', buffer, buffer.length);
}

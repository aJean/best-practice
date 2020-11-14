/**
 * @file FIS 配置
 * @author
 */

fis.set('namespace', 'wiseik');
// chrome下可以安装插件实现livereload功能
fis.set('livereload.port', 35729);
// 屏蔽静态文件
fis.set('project.ignore', ['/client/widget/container/homeView/**', 'fis.yml', 'package.json', 'npm-debug.log', 'build.sh', 'upload.py', 'BCLOUD', 'GIT_COMMIT', 'fis-conf.js', 'output/**', 'client/node_modules/**', 'typings/**']);
// client: es6 -> es5
fis.match('/client/{widget,observers}/**.{ts,tsx,jsx,es}', {
    parser: fis.plugin('typescript', {
        module: 1,
        target: 1
    }),
    isJsXLike: true,
    isMod: true
});
// 启用npm管理前端组件
fis.enableNPM({autoPack: true});
fis.hook('node_modules', {shimProcess: false, shimGlobal: false, shimBuffer: false});

// 识图结果页 less
fis.match('/client/widget/{header,container,ui}/**.{less,css}', {
    packTo: '/static/pkg/wiseik-index.css'
});
// observers js
fis.match('/client/observers/**.ts', {
    packTo: '/static/pkg/wiseik-observers.js'
});
// common js
fis.match('/client/widget/header/**.{es,ts,tsx}', {
    packTo: '/static/pkg/wiseik-common.js'
});
// 识图结果页 js
fis.match('/client/widget/{container,ui}/**.{ts,tsx}', {
    packTo: '/static/pkg/wiseik-result.js'
});
// 识图首页 js
fis.match('/client/widget/container/home/**.{ts,tsx}', {
    packTo: '/static/pkg/wiseik-home.js'
});
fis.match('/client/widget/container/home/**.less', {
    packTo: '/static/pkg/wiseik-home.css'
});

fis.media('djj').match('*', {
    useHash: false,
    useSprite: false,
    optimizer: null,
    deploy: fis.plugin('http-push', {
        receiver: 'http://djj01.image-node.otp.baidu.com/yog/upload',
        to: '/'
    })
});

// 上线
fis.media('prod').match('/client/**', {
    domain: ['//imgn0.bdstatic.com/image/mobile/n',
        '//imgn1.bdstatic.com/image/mobile/n',
        '//imgn2.bdstatic.com/image/mobile/n']
}).match('/static/**', {
    domain: ['//imgn0.bdstatic.com/image/mobile/n',
        '//imgn1.bdstatic.com/image/mobile/n',
        '//imgn2.bdstatic.com/image/mobile/n']
}).match('/static/pkg/**', {
    useHash: true
}).match('*.tpl', {
    domain: false
}).match('*.sh', {
    release: false
}).match('*.py', {
    release: false
});

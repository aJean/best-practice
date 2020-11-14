/**
 * @file FIS 配置
 */

fis.set('namespace', 'design');
// 屏蔽输出文件
fis.set('project.ignore', ['README.md', 'package.json', 'package-lock.json', 'tsconfig.json', 'fis-conf.js', 'node_modules/**', 'test/**']);

// 去注释插件
fis.match('/src/ppp.ts', {
    parser: function (content, file, settings) {
        return content.replace(/^\s*\/\/[^\n]*/g, '');
    }
});
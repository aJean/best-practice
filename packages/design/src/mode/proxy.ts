/**
 * @file 代理模式
 *       用于解耦对象操作, 分离日志, 缓存等逻辑
 *       js 不存在静态编译 所以 proxy 和 decorator 基本类似
 */

interface IStar {
    sendGift(name: string): void;
}

export class Star implements IStar {
    level: number;

    constructor(level) {
        this.level = level;
    }

    sendGift(name) {
        console.log('send gift to' + name);
    }
}

export class StarProxy implements IStar {
    star: Star;

    constructor(obj) {
        this.star = obj;
    }

    // 可以将一些辅助逻辑从原本类中剥离，保证原类纯洁内聚
    beforeSend() {
        this.star.level += 1;
    }

    afterSend() {
        this.star.level += 2;
    }

    sendGift(name) {
        this.beforeSend();
        this.star.sendGift(name);
        this.afterSend();
    }

    getLevel() {
        return this.star.level;
    }
}
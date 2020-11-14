/**
 * @file ioc container
 */


export interface Module {
    init(container): void;
}

export default {
    modules: [],

    add(...args) {
        Array.prototype.push.apply(this.modules, args);
    },

    install() {
        this.modules.forEach(module => {
            module.init(this);
        });
    }
}
import { Module } from './container';

export default class Router implements Module {
    init(container) {
        container.router = this;
        console.log('router register!');
    }
}
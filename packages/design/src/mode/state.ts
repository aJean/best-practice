/**
 * @file 状态模式
 *       关注点在于事物状态的改变而引起行为改变！
 */

interface State {
    excute(): void;
    getType(): string;
}

export enum Type {
    sleep = 'sleep',
    weak = 'weak'
}

export class SleepState implements State {
    type = Type.sleep;

    excute() {
        console.log('state sleep excute');
    }

    getType() {
        return this.type;
    }
}

export class WeakState implements State {
    type = Type.weak;

    excute() {
        console.log('state weak excute');
    }

    getType() {
        return this.type;
    }
}

export class Runtime {
    static sleep = new SleepState();
    static weak = new WeakState();
    state: State;
    
    run() {
        this.state.excute();
    }

    changeState(type) {
        this.state = Runtime[type];
    }

    getState() {
        return this.state.getType();
    }
}
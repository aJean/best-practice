/**
 * @file  函子, of 替换 new
 */
class Functor {
    static of(val) {
        return new Functor(val)
    }

    val: any;

    constructor(val) {
        this.val = val;
    }

    map(f) {
        return new Functor(f(this.val));
    }
}

const test = Functor.of(2).map(val => val + 4);

console.log(test);

/**
 * 内置空值检查的函子
 */
class Maybe extends Functor {
    map(f) {
        const val = this.val;

        return val ? Maybe.of(f(val)) : Maybe.of(null)
    }
}
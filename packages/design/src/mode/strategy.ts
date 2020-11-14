/**
 * @file 策略模式，对算法和行为的抽象
 *       其思想是面向接口编程
 */

interface Method {
  calcLadule(input: number): number;
}

export class BasicMethod implements Method {
  calcLadule(input: number) {
    return input * 3;
  }
}

export class AdvanceMethod implements Method {
  calcLadule(input: number) {
    return input * 3 + 4 - Math.cos(5);
  }
}

export class Runtime {
  method: Method;

  setMethod(method) {
    this.method = method;
  }

  work(input) {
    return this.method.calcLadule(input);
  }
}

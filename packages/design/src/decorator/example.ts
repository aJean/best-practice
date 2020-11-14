import 'reflect-metadata';
import myContainer from './service';
import { IRuntime, IDocker } from './interface';

/**
 * @file 装饰器
 */

function dclass(target) {
  console.log('decorate class');
}

function dvalue(target: Object, propertyName: string) {
  // prototype.name = 'Nealayng';
  target[propertyName] = 'Nealayng';
}

function dmethod(target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) {
  const method = descriptor.value;
  descriptor.value = function () {
    const ret = method.call(this);
    console.log(ret);
  };
}

// 参数修饰器
function dparam(target: object, name: string, index: number) {
  const method = target[name];
  Reflect.defineMetadata('test', '记录参数', method);
}

@dclass
class MyAction {
  path: string;
  @dvalue
  name: string;

  constructor(path?: string) {
    this.path = path;
  }

  @dmethod
  getPath() {
    return this.path;
  }

  setPath(@dparam path: string) {
    this.path = path;
  }
}

const action = new MyAction();
action.setPath('');

// 元数据
Reflect.defineMetadata('test', 'a', MyAction);

// console.log(Reflect.getMetadata('test', MyAction));
// console.log(Reflect.getMetadata('test', action.setPath));


// 执行 inversify
console.log(myContainer.get<IRuntime>('runtime'))
console.log(myContainer.getNamed<IDocker>('docker', 'jd'))
import { injectable, inject, Container } from 'inversify';
import { ISlam, IDocker, IRuntime } from './interface';

/**
 * @file 实现
 */

@injectable()
class Slam implements ISlam {
  trace() {
    return '调用了 trace';
  }

  init() {}
}

@injectable()
class Borg implements IDocker {
  type = 'borg';
  count: number;

  // 注入一个构造器
  public constructor(@inject('Newable<c>') Class: any) {
    this.count = new Class();
  }
}

@injectable()
class Docker implements IDocker {
  type = 'docker';
  count: number;

  // 动态工厂
  public constructor(@inject('Factory<f>') factory: () => any) {
    this.count = factory();
  }
}

@injectable()
class Runtime implements IRuntime {
  times: number;

  constructor(@inject('slam') slam: ISlam) {
    console.log(slam.trace());
  }
}

// 每次都创建新的 实例
const myContainer = new Container({ defaultScope: 'Transient' });
// 可以在绑定时重新指定 scope
myContainer.bind<Slam>('slam').to(Slam).inSingletonScope();
myContainer.bind<Runtime>('runtime').to(Runtime);

// 通过 name 区分同一接口的不同实现
myContainer.bind<IDocker>('docker').to(Docker).whenTargetNamed('jd');
myContainer.bind<IDocker>('docker').to(Borg).whenTargetNamed('bd');

// 绑定构造器
myContainer.bind('Newable<c>').toConstructor(Slam);

// 绑定工厂函数，然后根据参数创建不同的对象，这里又可以进一步提升程序的灵活性
myContainer.bind('Factory<f>').toFactory(() => {
  return () => {
    return 111111;
  };
});

// 所有实例都由 container 管理
export default myContainer;

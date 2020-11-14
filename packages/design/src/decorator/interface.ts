/**
 * @file 定义接口
 */

export interface ISlam {
  trace(): string;
  init(): void;
}

export interface IRuntime {
  times: number;
}

export interface IDocker {
  type: string;
  count?: number;
}
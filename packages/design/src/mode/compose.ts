/**
 * @file 组合模式
 *       整体模式，它将所有对象组合成树形结构。
 *       使得用户只需要操作最上层的接口，就可以对所有成员做相同的操作
 */

interface IOFile {
    setHeader(name: string);
}

export class MyFile implements IOFile {
    value: string;

    constructor(value) {
        this.value = value;
    }

    setHeader(name) {
        this.value += `&${name}`;
    }
}

export class MyFiles implements IOFile {
    list: Array<MyFile> = []

    add(f: MyFile) {
        this.list.push(f);
    }

    setHeader(name: string) {
        this.list.forEach(f => f.setHeader(name));
    }

    getList() {
        return this.list.map(f => f.value);
    }
}
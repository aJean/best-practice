/**
 * @file 正反序列化 2叉树，不使用 JSON 类
 */

function serialize(root) {
  function find(node) {
    const left = node.left;
    const right = node.right;
    let ret = '{';

    ret += `"val":${node.val},`;
    ret += `"children":[${left ? find(left) : null}, ${right ? find(right) : null}]`;
    ret += '}';
    return ret;
  }

  return find(root);
}

const tree = { val: 1, left: { val: 2, left: null, right: null }, right: null };
const json = serialize(tree);
console.log(json);

function parse(json) {
  const data = (new Function('return ' + json))();
  
  function find(data) {
    if (!data) {
      return null;
    }

    const node = { val: data.val };
    const children = data.children;

    if (children) {
      node.left = find(children[0]);
      node.right = find(children[1]);
    }

    return node;
  }

  return find(data);
}

const newTree = parse(json);
console.log(newTree);

function flattern(arr) {
  return arr.reduce((ret, current) => {
    if (typeof current == 'Object') {
      ret += flattern(current)
    } else {
      ret += current + '-'

    }

    return ret;
  }, '');
}

console.log(flattern([1, 3, [4, 5]]))
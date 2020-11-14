/**
 * @file 2叉树
 */

function createTree(list) {
  function addNode(value) {
    const parent = levels[0];

    const node = {
      value,
      left: null,
      right: null
    };

    if (!parent.left) {
      parent.left = node;
    } else {
      parent.right = node;
      levels.shift();
    }

    levels.push(node);
  }

  const root = {
    value: list.shift(),
    left: null,
    right: null
  };
  const levels = [root];

  while (list.length) {
    const value = list.shift();
    addNode(value);
  }

  return root;
}

const tree = createTree([10, 5, 12, 4, 7]);
console.log(tree);

function findPath(root, total) {
  function dfsFind(root, total, path, sum, result) {
    sum += root.value;

    path.push(root.value);

    if (sum == total && root.left == null && root.right == null) {
      result.push(path.slice(0));
    }
    if (root.left != null) {
      dfsFind(root.left, total, path, sum, result);
    }

    if (root.right != null) {
      dfsFind(root.right, total, path, sum, result);
    }

    path.pop();
  }

  const result = [];
  dfsFind(root, total, [], 0, result);
  return result.length ? result : 'error';
}

const res = findPath(tree, 22);
console.log(res);

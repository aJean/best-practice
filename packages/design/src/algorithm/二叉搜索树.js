const bst = {
  val: 5,
  left: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
};

/**
 * 中序遍历 bst，生成升序数组
 */
function inorder(root) {
  const list = [];

  function search(node) {
    if (node == null) {
      return '';
    }

    search(node.left);
    list.push(node.val);
    search(node.right);
  }

  search(root);
  return list;
}

console.log(inorder(bst));

/**
 * 判断是否为 bst
 */
function judgeBst(root) {
  let flag = true;
  let prev;

  function isValid(node) {
    if (node == null) {
      return;
    }

    isValid(node.left);

    // 判断当前值是否小于前一个基准值
    if (prev && prev >= node.val) {
      return flag = false;
    }
    prev = node.val;

    isValid(node.right);
  }

  isValid(root);
  return flag;
}

console.log(judgeBst(bst))

/**
 * 分治计算 x 的 n 次方，O(logn) 比循环效率高
 */
function pow(x, n) {
  if (n <= 2) {
    return x;
  }

  const ret = pow(x, n / 2);
  return ret * ret;
}

console.log(pow(2, 8))
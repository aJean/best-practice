/**
 * @file 2分查找
 */

const list = [1, 3, 12, 17, 22, 26, 35, 100];

function find(num) {
  let end = list.length;
  let start = 0;

  while (start <= end) {
    const index = Math.floor((start + end) / 2);
    const val = list[index];

    if (val == num) {
      return index;
    } else if (val > num) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }

  return 'not found';
}

console.log(find(100));

/**
 * @file 生成合法括号, O(2-2n)
 */

function createBracket(n) {
  const ret = [];

  function gen(left, right, n, str) {
    if (left == n && right == n) {
      return ret.push(str);
    }

    if (left < n) {
      gen(left + 1, right, n, str + '(');
    }

    if (left > right && right < n) {
      gen(left, right + 1, n, str + ')');
    }
  }

  gen(0, 0, n, '');

  return ret;
}

console.log(createBracket(3));
/**
 * @file 洗牌算法
 */

const list = [0, 1, 2, 3, 4, 5];

function random() {
  let len = list.length;

  function getIndex() {
    return Math.floor(Math.random() * len);
  }

  while (len) {
    const index = getIndex();
    temp = list[index];
    list[index] = list[len - 1];
    list[len - 1] = temp;
    len--;
  }

  return list;
}

console.log(random());

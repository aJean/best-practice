/** @file 快速排序 */

const list = [2, 13, 5, 9, 7, 45, 55, 61, 22];

function quickSort(arr) {
  //如果数组<=1,则直接返回
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  //找基准，并把基准从原数组删除
  var pivot = arr.splice(pivotIndex, 1)[0];
  //定义左右数组
  var left = [];
  var right = [];
  //比基准小的放在left，比基准大的放在right
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //递归，生成新数组，分布在参照点左右
  return quickSort(left).concat([pivot], quickSort(right));
}

// console.log('quick', quickSort(list.slice()));

/**
 * 使用下标，降低空间复杂度
 */
function quickSortSimple(arr) {
  function sort(start, end) {
    let mid = start;
    let left = start;
    let right = end;

    if (start >= end) {
      return;
    }

    // 找到第一个符合要求的，结束内部子循环
    while (left < right) {
      while (left < right) {
        const temp = arr[mid];

        if (arr[right] < temp) {
          arr[mid] = arr[right];
          arr[right] = temp;
          mid = right;
          break;
        }

        right--;
      }

      while (left < right) {
        const temp = arr[mid];

        if (arr[left] > temp) {
          arr[mid] = arr[left];
          arr[left] = temp;
          mid = left;
          break;
        }

        left++;
      }
    }

    sort(start, mid - 1);
    sort(mid + 1, end);
  }

  sort(0, arr.length - 1);
  return arr;
}

console.log('quick', quickSortSimple(list.slice()));

// 冒泡
function bubble(list) {
  const len = list.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (list[i] > list[j]) {
        const temp = list[j];
        list[j] = list[i];
        list[i] = temp;
      }
    }
  }

  return list;
}

// console.log('bubble', bubble(list.slice()));

const nums = [7, 6, 2, 4, 1, 9, 3, 8, 0, 5];
/**
 * 归并排序，先分解到最小，再做 merge
 */
function mergeSort(nums) {
  const len = nums.length;

  if (len <= 1) {
    return nums;
  }

  const mid = Math.round(len / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid, len));

  return merge(left, right);
}

// 这时已经是有序的
function merge(left, right) {
  const ret = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      ret.push(right.shift())
    } else {
      ret.push(left.shift())
    }
  }

  return ret.concat(left, right);
}

console.log('merge_sort', mergeSort(nums))
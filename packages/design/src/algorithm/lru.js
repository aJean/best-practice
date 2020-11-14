/**
 * @file 最近最少使用缓存
 */

function createLRU(max) {
  let head;
  let end;
  let len = 0;

  function insert(node) {
    // 增加链表长度
    if (len < max) {
      len++;
    }

    if (!head) {
      head = end = node;
      return;
    }

    node.next = head;
    head.pre = node;
    head = node;

    delete head.pre;
  }

  function remove() {
    end = end.pre;
    delete end.next;
  }

  function find(name) {
    let cur = head;

    while(cur) {
      if (cur.name == name) {
        break;
      }

      cur = cur.next;
    }

    if (cur) {
      const pre = cur.pre;
      const next = cur.next;

      if (pre) {
        if (next) {
          pre.next = next;
          next.pre = pre;
        } else {
          end = cur.pre;
          delete end.next;
        }

        // 放到头部
        cur.next = head;
        head.pre = cur;
        head = cur;
      }

      return cur.value;
    }
  }

  return {
    set(name, value) {
      const node = { name, value };
     
      if (len == max) {
        remove();
      } 

      insert(node)
    },

    get(name) {
      return find(name);
    },

    len() {
      return len;
    }
  }
}

const lru = createLRU(2);
lru.set('a', 1);
lru.set('b', 2);
lru.set('c', 3);


// console.log(lru.get('b'));
lru.set('d', 4);
console.log(lru.get('c'));
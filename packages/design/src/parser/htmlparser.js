/**
 * @file 分词 + 解析
 * 分词部分也可以用栈结构，把解析流程合进来
 */

function domParse() {
  const str = '<div><span>123</span><a>work</a></div>';
  const stag = /<[^/>]*>/;
  const ctag = /<\/[^/>]*>/;
  const list = str.match(/<[^>]*>|[^><]+/g);

  let current;
  let parent;
  let root;
  list.forEach(function (token) {
    if (stag.test(token)) {
      const node = { name: token.replace(/<|>/g, ''), children: [] };

      if (current) {
        current.children.push(node);
        parent = current;
      } else {
        root = node;
      }

      current = node;
    } else if (ctag.test(token)) {
      current = parent;
    } else {
      current.value = token;
    }
  });

  return root;
}

console.log(domParse());

// 或者通过 innerHtml 先转化为 dom，再遍历 dom

/**
 * 顺序解析 str
 */
function parseHtml(str) {
  const stack = [];
  const rtag = /<[^>]*>|[^><]+/;
  const rname = /[^<>]+/;
  let root;

  while (str) {
    const ret = str.match(rtag);
    const tag = ret[0];
    const name = tag.match(rname)[0];

    if (/<\//.test(tag)) {
      stack.pop();
    } else if (/^[^<>]+$/.test(tag)) {
      stack[stack.length - 1].vaule = name;
    } else {
      const node = {
        name: name,
        children: []
      };

      if (stack[0]) {
        stack[0].children.push(node);
      } else {
        root = node;
      }

      stack.push(node);
    }

    str = str.slice(tag.length);
  }

  return root;
}

console.log(parseHtml('<div><span>123</span><a>work</a></div>'));
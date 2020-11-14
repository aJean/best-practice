/**
 * @file json viewer
 *       在 html 中修改数据源
 */

(function() {
  const toString = Object.prototype.toString;

  function isPlainObject(value) {
    if (!value || typeof value !== 'object' || {}.toString.call(value) != '[object Object]') {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (
      typeof Ctor == 'function' &&
      Ctor instanceof Ctor &&
      Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
    );
  }

  function indent(count) {
    return new Array(count + 1).join('&nbsp;&nbsp;&nbsp;&nbsp;');
  }

  function format(data, indentCount) {
    let html = '';

    switch (toString.call(data)) {
      case '[object Null]':
        0;
        html = '<span class="json-null">null</span>';
        break;
      case '[object Boolean]':
        html = `<span class="json-boolean">${data}</span>`;
        break;
      case '[object Number]':
        html = `<span class="json-number">${data}</span>`;
        break;
      case '[object String]':
        html = `<span class="json-string">${data}</span>`;
        break;
      case '[object Array]':
        html = formatArray(data, indentCount);
        break;
      case '[object Object]':
        html = formatObject(data, indentCount);
        break;
    }
    return html;
  }

  function formatArray(array, count) {
    const result = array.map(function(data) {
      return indent(count) + format(data, count + 1);
    });

    return `<span>
        [ <i class="json-collapse" onclick="collapse(this)" data-type="array">-</i>
        <br/>${result.join(',<br/>')}<br/>${indent(count - 1)}]
      </span>`;
  }

  function formatObject(object, count) {
    const result = Object.keys(object).map(function(key) {
      return `${indent(count)}<span class="json-key">${key}</span>: ${format(object[key], count + 1)}`;
    });

    return `<span>
        { <i class="json-collapse" onclick="collapse(this)" data-type="object">-</i>
          <br/>${result.join(',<br/>')}<br/>${indent(count - 1)}
        }
      </span>`;
  }

  const htmlConsole = (function() {
    const div = document.createElement('div');
    div.className = 'html-console';
    document.body.append(div);

    return function(code) {
      div.innerHTML = code;
    };
  })();

  window.showJson = function(data) {
    try {
      const temp = isPlainObject(data) ? data : JSON.parse(data);
      const view = format(temp, 1);

      htmlConsole(view);
    } catch (e) {
      htmlConsole(`<span class="json-error">${e.message}</span>`);
    }
  };

  window.collapse = function(node) {
    const parent = node.parentNode;
    const type = node.getAttribute('data-type');

    parent.setAttribute('data-inner', parent.innerHTML);

    if (type === 'array') {
      parent.innerHTML = '[ <i class="json-expand" onclick="expand(this)" data-type="array">+</i> ... ]';
    } else {
      parent.innerHTML = '{ <i class="json-expand" onclick="expand(this)" data-type="object">+</i> ... }';
    }
  };

  window.expand = function(node) {
    const parent = node.parentNode;
    parent.innerHTML = parent.getAttribute('data-inner');
  };
})();

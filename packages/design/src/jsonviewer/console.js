/**
 * @file 封装 log，又输出正确的行号
 */

function makeDebug(instance) {
  if (window) {
    instance.log = console.log.bind(window.console);
  } else {
    instance.log = function () {};
  }

  return instance;
}

const print = makeDebug({});

function test(str) {
  print.log('test-' + str);
}

test('qy');

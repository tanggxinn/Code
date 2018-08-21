//要编写一个产生斐波那契数列的函数，可以这么写：

function fib(max) {
  var
    arr = [0, 1];
  // [a,b]=[0,1];
  // while (arr.length < max) {
  //     [a, b] = [b, a + b];
  //     arr.push(b);
  // }
  for (let i = 0; i < max - 2; i++) {
    let s = arr[i] + arr[i + 1];
    arr.push(s);
  }
  return arr;
}
// 测试:
console.log(fib(10));

//使用generator函数生成斐波数列

function* fib2(max) {
  var
    a = 0,
    b = 1,
    n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
  return;
}
var f = fib2(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

//不用闭包，试用generator写一个自增id

'use strict';

function* next_id() {
  let id = 1;
  for (;;) {
    yield id++;
  }
}
// 测试:
var
  x,
  pass = true,
  g = next_id();
for (x = 1; x < 100; x++) {
  if (g.next().value !== x) {
    pass = false;
    console.log('测试失败!');
    break;
  }
}
if (pass) {
  console.log('测试通过!');
}
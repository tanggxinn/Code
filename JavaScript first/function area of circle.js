//制作一个求圆形面积的函数

'use strict';

function area_of_circle(r, pi) {

  if (0 == arguments.length) {
    return 0;
  } else if (1 == arguments.length) {
    pi = 3.14;
    var x = pi * r * r;
    return x;
  } else {
    var x = pi * r * r;
    return x;
  }

}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
  console.log('测试通过');
} else {
  console.log('测试失败');
}
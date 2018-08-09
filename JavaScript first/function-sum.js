//制作一个求和函数

'use strict';

function sum(a, ...rest) {
  if (0 === arguments.length) {
    return 0;
  } else if (1 === arguments.length) {
    return a;
  } else {
    var p, x = a;
    for (p = 0; p < rest.length; p++) {
      x = x + rest[p];
    }
    return x;
  }
}

//测试:
var i, args = [];
for (i = 1; i <= 100; i++) {
  args.push(i);
}
if (sum() !== 0) {
  console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
  console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
  console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
  console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
  console.log('测试通过!');
}
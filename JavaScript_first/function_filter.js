//把一个Array中的空字符串删掉

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
  return s && s.trim(); //trim()方法用于删除字符串中空字符、换行符等等
  // 注意：IE9以下的版本没有trim()方法
});
console.log(r);

//利用filter，去除Array的重复元素

'use strict';

var
  r,
  arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

r = arr.filter(function (element, index, self) {
  return self.indexOf(element) === index;
});

console.log(r);
console.log(r.toString());

//请尝试用filter()筛选出素数：

function get_primes(arr) {
  return arr.filter(
    function (element) {
      var p = 0;
      for (let i = 1; i < element; i++) {
        if ((element % i === 0) && (i !== 1)) {
          p = 0;
          break;
        }
        p = 1;
      }
      return p;
    }
  )
}
// 测试:
var
  x,
  r,
  arr = [];
for (x = 1; x < 100; x++) {
  arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
  console.log('测试通过!');
} else {
  console.log('测试失败: ' + r.toString());
}
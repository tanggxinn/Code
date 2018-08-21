'use strict';

//计算一串数字的积

function product(arr) {

  function x(x, y) {
    return x * y;
  }

  var result = arr.reduce(x);
  return result;

}

console.log(product([1, 2, 3]));

//把字符串转换成数字,不能用parseInt和Number函数

function string2int(s) {
  var arr = s.split('');
  arr = arr.map(function (n) {
    return +n;
  });
  return arr.reduce(function (x, y) {
    return x * 10 + y;
  });

}
console.log(string2int('54675'));

//请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
//输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。

function normalize(arr) {
  var arr1 = arr.map(function (x) {
    x = x.toLowerCase();
    return x.split('');
  });
  arr1 = arr1.map(
    function (ray) {
      ray[0] = ray[0].toUpperCase();
      ray = ray.reduce(
        function (x, y) {
          return x + y;
        }
      )
      return ray;
    }
  )
  return arr1;
}
console.log(normalize(['adam', 'LISA', 'barT']));

//利用map()把字符串变成整数

var arr = ['1', '2', '3'];
var r;
r = arr.map(
  function (x) {
    x = parseInt(x, 10);
    return x;
  }
);
console.log(r);
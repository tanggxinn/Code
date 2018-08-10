/*请尝试for循环和while循环，
并以正序、倒序两种方式遍历数组中的每个名字，
并显示Hello, xxx!*/

'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
var u,i,o,p;
//while倒序
i = arr.length - 1;
while (i >= 0) {
  console.log('Hello,' + arr[i] + '!');
  i--;
}
//while正序
o = 0;
while (o < arr.length) {
  console.log('Hello,' + arr[o] + '!');
  o++;
}
//for倒序
for (p = arr.length - 1; p >= 0; p--) {
  console.log('Hello,' + arr[p] + '!');
}
//for正序
for (u = 0; u < arr.length; u++) {
  console.log('Hello,' + arr[u] + '!');
}
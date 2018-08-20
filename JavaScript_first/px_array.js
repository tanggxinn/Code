/*在新生欢迎会上，你已经拿到了新同学的名单，
请排序后显示：欢迎XXX，XXX，XXX和XXX同学！*/

'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];
arr.sort();
arr.join('，');

var arr2 = arr.pop();

console.log('欢迎' + arr + '和' + arr2 + '同学！');
console.log(arr.slice(0, 3).join('\n'));
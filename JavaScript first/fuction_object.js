'use strict';

//根据小明的生日计算小明的年龄

var xiaoming = {
  name: '小明',
  birth: 1990,
  age: function () {
    var y = new Date().getFullYear();
    console.log(new Date + 'the year ' + new Date().getFullYear());
    return y - this.birth;
  }
};

//xiaoming.age; // function xiaoming.age()
console.log(xiaoming.age());

//使用apply函数测算调用了几次parseint函数

var count = 0;
var oldP = parseInt; // 保存原函数

parseInt = function () {
  count += 1;
  console.log('count = ' + count);
  return oldP.apply(null, arguments); // 调用原函数
};
// 测试:
console.log('parseInt1=' + parseInt('10', 5));
console.log('parseInt2=' + parseInt('20', 8));
console.log('parseInt3=' + parseInt('30', 6));
console.log('count_end = ' + count); // 3
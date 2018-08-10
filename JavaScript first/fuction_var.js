'use strict';

var myvar = {};
myvar.x = 5;
myvar.y = 6;
console.log(myvar.x - myvar.y);

function foo() {
  var sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
  }
  // i += 1; 会报错
}
foo();

const PI = 3.14;
// PI = 3; 无效果！
PI; // 3.14

var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school'
};
var {name, age, passport} = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);


'use strict';

//定义一个变量组名，后面用变量组名.变量就都不用申明了

var myvar = {};
myvar.x = 5;
myvar.y = 6;
console.log(myvar.x - myvar.y);

//let申明的变量只在作用域里面有用，出来就没用了

function foo() {
  var sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
  }
  // i += 1; 会报错
}
foo();

//const定义的是常量，就是左边的名字指向固定的地址

const PI = 3.14;
// PI = 3; 无效果！
PI; // 3.14

//只要等号两边模板一样，就可以对应赋值

var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);
//选用对应属性名，甚至可以单独提取对象属性的值
var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school'
};
var {
  name,
  age,
  passport
} = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);
// 请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，
// 并共享一个方法say()，返回字符串'Hello, xxx!'

'use strict';

function Cat(name) {
  this.name = name;
};
Cat.prototype.say = function () {
  return ('Hello, ' + this.name + '!');
};
// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
  console.log('测试通过!');
} else {
  console.log('测试失败!');
}

//创建一个分支原型

function inherits(Child, Parent) {
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function Student(props) {
  this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function () {
  return ('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
  Student.call(this, props);
  this.grade = props.grade || 1;
}
// 实现原型继承链:
inherits(PrimaryStudent, Student);
// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
  return this.grade;
};
var goodwang = new PrimaryStudent({
  name: 'Goodwang',
  grade: 9
});
var wang = new Student({
  name: 'Wang',
  grade: 5
});
console.log(goodwang.name + '\n' + goodwang.hello() + '\n' + goodwang.grade);
console.log(wang.name + '\n' + wang.hello() + '\n' + wang.grade);
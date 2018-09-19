//var

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log('var for 循环 i=' + i);
  };
}
var b = (a[1]() === console.log('var for 循环 i=' + i));
console.log(b);

//let

var c = [];
for (let u = 0; u < 10; u++) {
  c[u] = function () {
    console.log('let for 循环 u=' + u);
  };
}
var d = (c[1]() === console.log('let for 循环 u=' + 1));
console.log(d);

//for循环有两层作用域，
//｛｝里是父作用域，（）里是子作用域。

for (let y = 0; y < 3; y++) {
  let y = 'abc';
  console.log('y=' + y);
}

// var 变量提升

console.log('foo=' + foo);
var foo = 2;
// 输出undefined

// let 无变量提升

/* console.log('bar='+bar);
let bar = 2; */
// 报错ReferenceError

//暂时性死区（TDZ）

var tmp = 123;
if (true) {
  // TDZ开始
  /* tmp = 'abc'; */
  // ReferenceError
  /* console.log('tmp='+tmp); */
  // ReferenceError
  let tmp; // TDZ结束
  console.log('tmp=' + tmp);
  tmp = 456;
  console.log('tmp=' + tmp);
}
console.log('tmp=' + tmp);

//隐蔽死区

/* function barvar(x = y, y = 2) {
  return [x, y];
}
console.log(barvar()); */
//报错ReferenceError

function barlet(x = 2, y = x) {
  return [x, y];
}
console.log(barlet());
//不报错

var v = v;
//不报错

/* let l=l; */
//报错ReferenceError

//let不允许重复声明

/* function func() {
  let a = 10;
  var a = 1;
} */
// 报错

/* function func() {
  let a = 10;
  let a = 1;
} */
// 报错

//如果没有块级作用域

var vartime = new Date();
console.log('vartime=' + vartime);

function f1() {
  console.log('function f1() 中 vartime=' + vartime);
  if (false) {
    var vartime = 'hello world';
    //这里“var vartime”变量提升，
    //被提到了“function f1()”的第一行，
    //也就是变成了:
    /* “var vartime;
    vartime=new Date();
    function f1(){
      var vartime;
      console.log(vartime);
    };” */
  }
}
f1();

//有块级作用域

var lettime = new Date();
console.log('lettime=' + lettime);

function f2() {
  console.log('function f2() 中 lettime=' + lettime);
  if (false) {
    let lettime = 'hello world';
  }
}
f2();

function f3() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log('n=' + n);
  if (true) {
    n = 10;
  }
  console.log('n=' + n);
}
f3();

//函数在块级作用域中声明的效果

function f() {
  console.log('I am outside!');
}

(function () {
  if (0) {
    function f() {
      console.log('I am inside!');
    }
  }
  // 重复声明一次函数f，相当于：
  /* function () {
    var f;
    if (0) {
      function f(){...};
    }
  } */
  f();

}());
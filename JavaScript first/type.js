'use strict'

function f() {};
var arr = [],
  type = {};

typeof 123; //"number"
typeof 'w8e9'; //"string"
typeof true; //"boolean"
typeof f; //"function"
typeof arr; //"object"
typeof type; //"object"
typeof null; //"object"
typeof undefined; //"undefined"

function bool(string) {
  if (string) {
    console.log(string + ' is true');
  } else {
    console.log(string + ' is false');
  }
}
bool(undefined); //f
bool(null); //f
bool(NaN); //f
bool(''); //f
bool(""); //f
bool([]); //t
bool({}); //t
bool(0 && 1); //f
bool(0 || 1); //t

console.log(0.1 + 0.2 === 0.3);//f
console.log(0.1 + 0.2);//0.30000000000000004
console.log(0.1 + 0.3 === 0.4);//t
console.log(3 / 1);//2.9999999999999996
console.log(0.4 / 0.1);//4
console.log(0.1 - 0.3 === 0.4 - 0.6);//f

Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
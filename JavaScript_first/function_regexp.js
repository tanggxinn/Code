//请尝试写一个验证Email地址的正则表达式。

'use strict';

var re = /^([0-9a-zA-Z\.]+)@([0-9a-z]+)((\.com)|(\.cn)|(\.org))$/;
// 测试:
var
  i,
  success = true,
  should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
  should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
  if (!re.test(should_pass[i])) {
    console.log('测试失败: ' + should_pass[i]);
    success = false;
    break;
  }
}
for (i = 0; i < should_fail.length; i++) {
  if (re.test(should_fail[i])) {
    console.log('测试失败: ' + should_fail[i]);
    success = false;
    break;
  }
}
if (success) {
  console.log('测试通过!');
}

//写出正则表达式能提取email地址中的名字

var re = /^([0-9a-zA-Z\.]+)@([0-9a-z]+)((\.com)|(\.cn)|(\.org))$/;
// 测试:
var
  i,
  success = true,
  should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
  should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
  if (!re.test(should_pass[i])) {
    console.log('测试失败: ' + should_pass[i]);
    success = false;
    break;
  }
}
for (i = 0; i < should_fail.length; i++) {
  if (re.test(should_fail[i])) {
    console.log('测试失败: ' + should_fail[i]);
    success = false;
    break;
  }
}
if (success) {
  console.log('测试通过!');
}
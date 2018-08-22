
//catch中throw可以触发转入finally代码块

function f() {
  try {
    throw '出错了！';
  } catch (e) {
    console.log('捕捉到内部错误');
    throw e; // 这句会等到finally结束再执行
  } finally {
    return false; // 这里直接返回，不会再运行排在后面的语句了
  }
}
try {
  f();
} catch (e) {
  // 此处不会执行
  console.log('caught outer "bogus"');
}

//catch中return可以触发转入finally代码块

function f2() {
  try {
    console.log(0);
    throw 'bug';
  } catch(e) {
    console.log(1);
    return true; // 这句会延迟到 finally 代码块结束再执行
    console.log(2); // 不会运行
  } finally {
    console.log(3);
    return false; // 这里直接 return了，就不会运行上面catch的return了
    console.log(4); // 不会运行
  }
  console.log(5); // 不会运行
}
var result = f2();
console.log(result);
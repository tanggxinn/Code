function f() {
  try {
    throw '出错了！';
  } catch (e) {
    console.log('捕捉到内部错误');
    throw e; // 这句原本会等到finally结束再执行
  } finally {
    return false; // 直接返回
  }
}
try {
  f();
} catch (e) {
  // 此处不会执行
  console.log('caught outer "bogus"');
}
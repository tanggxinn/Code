
//先将类似数组的对象转换为数组再调用方法

function printf(x) {
  var arr = Array.prototype.slice.call(arguments); //把类似数组的对象变成数组
  console.log(arr);
  return arr;
};

printf(5, 6, 7, 8, 9, 'lalala').forEach(element => {
  console.log(element + '!');
});//这样就可以对类似数组的对象使用数组特有的方法了

//直接调用方法（比较慢）

Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});//'abc'字符串也是一种类似数组的对象，这里直接将foreach方法嫁接给了字符串

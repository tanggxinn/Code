
//按1, 2, 10, 20排序

'use strict'
var arr = [10, 20, 1, 2];
arr.sort((x, y) => {
  if(x-y>0){
    return 1;
  }else if (x-y<0){
    return -1;
  }else{
    return 0;
  }
});
console.log(arr); 

//由于this在箭头函数中已经按照词法作用域绑定了，
//所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，
//即传入的第一个参数被忽略

var obj = {
  birth: 1990,
  getAge: function (year) {
      var fn = (y) => y - this.birth;
      console.log(this.birth); //1990
      return fn.call({birth:2000}, year);
  }
};
console.log(obj.getAge(2015));

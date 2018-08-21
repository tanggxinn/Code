
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

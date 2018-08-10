/*要做一个数组，元素都是对象，
对象的属性也是数组，里面又是对象，
不知道套了多少层，
现在要搜索里面所有的元素的一个关键字，
要求反馈所有包含这个关键字的数组和父级。*/

//数据原型
var Aa = {
  name: 'Aa',
  children: [],
  text: ['blue']
};
var Ab = {
  name: 'Ab',
  children: [],
  text: ['red', 'blue', 'green']
};
var Ac = {
  name: 'Ac',
  children: [],
  text: ['white']
};
var Ad = {
  name: 'Ad',
  text: []
};
var A = {
  name: 'A',
  children: [Aa, Ab, Ac, Ad],
  text: ['white', 'blue', 'red', 'green']
};

var Ba = {
  name: 'Ba',
  children: [],
  text: ['blue']
};
var Bb = {
  name: 'Bb',
  children: [],
  text: ['red', 'blue', 'green']
};
var Bc = {
  name: 'Bc',
  children: [],
  text: ['white']
};
var Bd = {
  name: 'Bd',
  text: []
};
var B = {
  name: 'B',
  children: [Ba, Bb, Bc, Bd],
  text: ['white', 'blue', 'red', 'green']
};

var Ca = {
  name: 'Ca',
  children: [],
  text: ['blue']
};
var Cb = {
  name: 'Cb',
  children: [],
  text: ['red', 'blue', 'green']
};
var Cc = {
  name: 'Cc',
  children: [15],
  text: ['white']
};
var Cd = {
  name: 'Cd',
  text: []
};
var C = {
  name: 'C',
  children: [Ca, Cb, Cc, Cd],
  text: ['white', 'blue', 'red', 'green']
};

var arr = [A, B, C];

//遍历数组
/*无函数的办法
var i, p = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i].text.indexOf('blue')) {
    console.log(arr[i].name);
  }
  if (arr[i].children) {
    for (p = 0; p < arr[i].children.length; p++) {
      if (arr[i].children[p].text.indexOf('blue')>=0) {
        console.log(arr[i].children[p].name);
      }
    }
  }
}*/

// function search(te) {
//   if (te.text.indexOf('blue')>=0) {
//     console.log(te.name);
//   }else{
//     console.log('null');
//   }
// }

// function findarray(fa) {
//   var dx1 = [];
//   if (fa.children) {
//     dx1 = fa.children;
//   }
//   return dx1;

// }
// var u=0,i=0,p=0, dx = arr, dx1 = [];

//   for (i = 0; i < dx.length; i++) {
//     console.log(dx.length)
//     var x = findarray(dx[i])
//     if ( x.length>0){
//      y= dx.concat(x);
//      console.log(x);
//      dx = y;
//      y=[];
//     }
//   }

// for (p=0;p<dx.length;p++){
//   search(dx[p]);
// }

function is(keywords, shx) {
  return shx.indexOf(keywords) >= 0;
}

function find(array) {
  array.forEach((item) => {
    if (item.text && is(searchkw, item.text)) {
      console.log(item.name)
    }
    if (item.children) {
      find(item.children);
    }
  })
}

searchkw='red';
find(arr);












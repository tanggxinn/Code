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
  children: [],
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
var i, p = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i].text.indexOf('blue')) {
    console.log(arr[i].name);
  }
  if (arr[i].children) {
    for (p = 0; p < arr[i].children.length; p++) {
      /* var u=arr[i].children[p].text.indexOf('blue');
      console.log(u); */
      if (arr[i].children[p].text.indexOf('blue')>=0) {
        console.log(arr[i].children[p].name);
      }
    }
  }
}
var x = 0,
  y = 0;
console.log('x+=1 = ' + (x += 1));
console.log('x = ' + x);
console.log('x-=1 = ' + (x -= 1));
console.log('y++ = ' + (y++));
console.log('y = ' + y);
console.log('y-- = ' + (y--));
console.log('y = ' + y);
console.log('++y = ' + (++y));
console.log('y = ' + y);

//推荐把switch...case结构写成对象结构

// function doAction(action) {
//   switch (action) {
//     case 'hack':
//       return 'hack';
//       break;
//     case 'slash':
//       return 'slash';
//       break;
//     case 'run':
//       return 'run';
//       break;
//     default:
//       throw new Error('Invalid action.');
//   }
// }
//上面的代码建议改写成对象结构。
function doAction(action) {
  var actions = {
    'hack': function () {
      return 'hack';
    },
    'slash': function () {
      return 'slash';
    },
    'run': function () {
      return 'run';
    }
  };
  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }
  return actions[action]();
}
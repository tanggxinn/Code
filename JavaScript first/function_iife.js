(function (a, ...rest) {
  if (0 === arguments.length) {
    console.log(0);
  } else if (1 === arguments.length) {
    console.log(a);
  } else {
    var p, x = a;
    for (p = 0; p < rest.length; p++) {
      x = x + rest[p];
    }
    console.log(x);
  }
})(1, 2, 3, 4, 5, 6, 7, 8, 9);
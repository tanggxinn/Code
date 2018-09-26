let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log('foo='+foo);
console.log('bar='+bar);
console.log('baz='+baz);

let [ , , third] = ["foo", "bar", "baz"];
console.log('third='+third);

let [x, , y] = [1, 2, 3];
console.log('x='+x);
console.log('y='+y);

let [head, ...tail] = [1, 2, 3, 4];
console.log('head='+head);
console.log('tail='+tail);

let [n, p, ...m] = ['a'];
console.log('n='+n);
console.log('p='+p);
console.log('m='+m);

let [i]=['l','o','v','e'];
console.log('i='+i);

let [q, w, e] = new Set(['a', 'a', 'c']);
console.log('q='+q);
console.log('w='+w);
console.log('e='+e);

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [fir, sec, thi, fou, fif, six] = fibs();
console.log([fir, sec, thi, fou, fif, six]);

let [love = true] = [];
console.log('love='+love);

let [x1, y1 = 'b'] = ['a'];
console.log('x1='+x1);
console.log('y1='+y1);
[x1, y1] = ['new a', undefined];
console.log('x1='+x1);
console.log('y1='+y1);

let [cannot = 1] = [undefined];
console.log('cannot='+cannot);

let [can = 1] = [null];
console.log('can='+can);

function f() {
  console.log('aaa');
}
let [nof = f()] = [1];
nof;
console.log('nof='+nof);

console.log([1][0]);

let [rn = 1, rm = rn] = [];
console.log('rn='+rn+','+'rm='+rm);
[rn = 1, rm = rn] = [2];
console.log('rn='+rn+','+'rm='+rm);
[rn = 1, rm = rn] = [1, 2];
console.log('rn='+rn+','+'rm='+rm);

let { bar8, foo5 } = { foo5: "aaa", bar8: "bbb" };
console.log('bar8='+bar8);
console.log('foo5='+foo5);

let { baz9 } = { foo5: "aaa", bar8: "bbb" };
console.log('baz9='+baz9);
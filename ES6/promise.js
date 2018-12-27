const promise = new Promise(function(resolve, reject) {
  let a,b,c,d;
  a=0;
  d=[];
  for (let i=0;i<10;i++){
    b=a+1;
    c=a+b;
    a=c;
    d.push(a);
  }

  if (a>1023){
    resolve(d);
  } else {
    reject(a);
  }
});

console.log(promise);
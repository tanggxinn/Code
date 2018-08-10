var xiaoming = {
  name: '小明',
  birth: 1990,
  age: function () {
      var y = new Date().getFullYear();
      return y - this.birth;
  }
};

//xiaoming.age; // function xiaoming.age()
console.log(xiaoming.age());


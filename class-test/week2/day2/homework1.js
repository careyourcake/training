/**
function Person(name,age){
this.name = name;
this.age = age;
this.introduce = function(){}
}
怎么通过创建两个对象 张三和李四，然后判断两个对象的introduce指向是否一致
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {}
}

var 张三 = new Person("张三", 20);
var 李四 = new Person("李四", 25);

var result1 = 张三.introduce === 李四.introduce;//利用 ===运算符
var result2 = Object.is(张三.introduce, 李四.introduce);//利用Object.is()方法  ，还能用来判断变量是不是NaN,正0和负0是不相等的
var result3 = 张三.introduce.toString() === 李四.introduce.toString();//toString()方法直接比较字符串值，不同实例创建的函数，toString()方法返回的字符串值不同
console.log(张三);
console.log(李四);
console.log("===运算符:", result1);
console.log("Object.is:", result2);
console.log("toString:", result3);
//let M =NaN;
//console.log(Object.is(NaN,M));//true  
//console.log(NaN === M);//false  
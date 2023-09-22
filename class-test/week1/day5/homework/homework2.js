/**
 * 请遍历对象zhangsan的属性和方法。
let zhangsan = new Object()
zhangsan.name = '张三'
zhangsan.gender = '男'
zhangsan.age = 18
let address = new Object()
address.province = '福建省'
address.city = '厦门市'
address.area = '集美区'
zhangsan.address = address
zhangsan.introduce = function(){}
zhangsan.eat= function(){}

 */
let zhangsan = new Object();
zhangsan.name = '张三';
zhangsan.gender = '男';
zhangsan.age = 18;
let address = new Object();
address.province = '福建省';
address.city = '厦门市';
address.area = '集美区';
zhangsan.address = address;
zhangsan.introduce = function() {};
zhangsan.eat = function() {};

for (let key in zhangsan) {
  if (typeof zhangsan[key] !== 'function') {
    console.log(key + ': ' + zhangsan[key]);
  } else {
    console.log(key + ': [function]');
  }
}
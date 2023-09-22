/**
 * 给下面的对象添加一个属性full name，值为张三，并在控制台输出。
let zhangsan = new Object()
zhangsan.firstname = '三'
zhangsan.lastname= '张'

 */
let zhangsan = new Object();
zhangsan.firstname = '三';
zhangsan.lastname = '张';
zhangsan['full name'] = '张三';

console.log(zhangsan['full name']);
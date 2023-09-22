/**
let arr = [1,2,3]
arr[‘name’] = ‘zhangsan’
arr[‘age’] = 20
请判断数组arr的长度，并说明原因。
 */

var arr = [1, 2, 3];
arr['2'] = 'zhangsan';
arr['age'] = 20;
//数组长度是根据数组的索引元素数量而改变的，给数组添加与一开始元素类型不同的的属性时不改变长度
console.log("数组长度:", arr.length); 
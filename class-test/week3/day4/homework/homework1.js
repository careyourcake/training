/* 1.	将下面Map中的值放入数组，并转化为Set
let map = new Map()
map.set(1,1)
map.set(2,2)
map.set(3,2)
map.set(‘3’,3)
map.set({},{name:’zhangsan’}) */

 let map = new Map();
map.set(1, 1);
map.set(2, 2);
map.set(3, 2);
map.set('3', 3);
map.set({}, { name: 'zhangsan' });

let array = Array.from(map.values());
let set = new Set(array);
console.log(set);
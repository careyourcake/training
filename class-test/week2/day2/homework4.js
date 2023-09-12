/*
请使用JavaScript统计数组arr中各个数出现的次数。
let arr = [-1,0,’0’,1,’2’,2,2,3,3,3,4,4,4,4,’5’]
*/

/* let arr = [-1, 0, '0', 1, '2', 2, 2, 3, 3, 3, 4, 4, 4, 4, '5'];

function counttimes(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (counts[number]) {
      counts[number]++;
    } else {
      counts[number] = 1;
    }
  }

  return counts;
}

let times = counttimes(arr);

for (let number in times) {
  console.log(number + ': ' + times[number]);
} */

let arr = [-1, 0, '0', 1, '2', 2, 2, 3, 3, 3, 4, 4, 4, 4, '5'];

function counttimes(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    //添加一个key通过typeof判断是数字还是字符串 toString()方法保留原字符串格式的元素值，不然输出结果还是两个0虽然一个是0一个是’0‘
   let key = typeof element === 'number' ? element.toString() : "'" + element + "'";
    if (counts[key]) {
      counts[key]++;
    } else {
      counts[key] = 1;
    }
  }

  return counts;
}

let times = counttimes(arr);

for (let key in times) {
    let element = key;
    console.log(element + ': ' + times[key]);
  } 

  
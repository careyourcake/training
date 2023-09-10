/**
 * 作业4:
 * 请使用JavaScript去除数组arr中重复项。
let arr = [-1,0,1,2,2,3,3,3,4,4,4,4]
 */
let arr = [-1, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
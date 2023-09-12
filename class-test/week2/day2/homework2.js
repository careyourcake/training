/**作业2：
let arr = [1,2,3]
请使用不少于2中方法实现一个数组拷贝的函数，对arr进行拷贝并测试。
 */

//利用arr.slice（）方法
  function copyArray1(arr) {
    return arr.slice();
  }
//利用扩展运算符...  ,是ES6新引入的语法
  function copyArray2(arr) {
    return [...arr];
  }
//利用arr.from()方法 ,是ES6引入的静态方法
  function copyArray3(arr) {
    return Array.from(arr);
  }
//利用arr.concat()方法
  function copyArray4(arr) {
    return arr.concat();
  }
  
  var arr = [1, 2, 3];
  var copiedArray1 = copyArray1(arr);
  var copiedArray2 = copyArray2(arr);
  var copiedArray3 = copyArray3(arr);
  var copiedArray4 = copyArray4(arr);

  console.log("原来的数组:", arr);

  console.log("slice()方法复制:", copiedArray1);
  console.log("扩展运算符复制:", copiedArray2);
  console.log("from()方法复制:", copiedArray3);
  console.log("concat()方法复制:", copiedArray4);
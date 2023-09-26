/**
 * 使用ES6的class定义一个新的类XArray
 * 要求该类从Array对象继承
 * 使用XArray的sort方法对数组[-1,1,12,2,3,-99,5]进行排序，确保排序正确
 */
class XArray extends Array {
    sort() {
      return super.sort((a, b) => a - b);
    }
  }
  
  const arr = new XArray(-1, 1, 12, 2, 3, -99, 5);
  arr.sort();
  console.log(arr); // 输出: [-99, -1, 1, 2, 3, 5, 12]
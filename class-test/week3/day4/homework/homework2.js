/* 2.	使用Array的sort方法对下面的数进行排序（确保排序正确）
   -1   1   5   9  13  99  23  3  -99 */


 let numbers = [-1, 1, 5, 9, 13, 99, 23, 3, -99];
/*a-b升序b-a降序 */
numbers.sort((a, b) => a - b);

console.log(numbers);
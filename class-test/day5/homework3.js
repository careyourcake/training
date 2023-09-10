/**
 * 请使用JavaScript统计数组arr中各个数出现的次数。
let arr = [-1,0,1,2,2,3,3,3,4,4,4,4] 
 */
function count(arr) {
    let occurrences = {};
    
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (occurrences[num]) {
        occurrences[num]++;
      } else {
        occurrences[num] = 1;
      }
    }
    
    return occurrences;
  }
  
  let arr = [-1, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  let result = count(arr);
  console.log(result);
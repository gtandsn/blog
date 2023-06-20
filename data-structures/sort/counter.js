/**
 * 计数排序
 * 索引是有序的，把原始数组中的值放入新数组的索引中，然后再遍历出新数组的索引，数据就是排序好的数据
 * **/
var testArr = [5,7,5,4,9,1];

function countSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let counts = new Array(findMax(arr) + 1);
  arr.forEach((item,index)=> {
    if(!counts[item]) {
      counts[item] = 0;
    }
    //counts[item] = counts[item] + 1;
    counts[item]++;


  });


  let newArr = [];
  let sortIndex = 0;
  counts.forEach((item,index)=> {
   while(item > 0) {
    newArr[sortIndex++] = index;
    item--;
   }
  });



  console.log(newArr.toString())



}

function findMax(arr) {
  let max = arr[0];
  let {length} = arr;
  for(let i = 1; i<length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  //这种方法对于我们来说是黑盒
  //return Math.max(...arr);
  return max;
}

countSort(testArr);

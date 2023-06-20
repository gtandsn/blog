function mergeSort(array) {

  if (array.length > 1) {
    const {
      length
    } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    array = merge(left, right);
    console.log("left",left.toString(),"right", right.toString(), array);
  }

  console.log("array",array);
  return array;
}

function merge(left, right) {

  // let left = [7,8,9];
  // let right = [6,10];

  let i = 0;
  let j = 0;

  let result = [];
  while (right &&  left && i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  result = result.concat(i < left.length ? left.slice(i) : right.slice(j));

  console.log('merge result:',  result.toString());
  return result;

}

function randNumber(count) {

  let testArr = [];
  for (let i = 0; i < count; i++) {
    testArr.push(Math.floor(Math.random() * 100));
  }
  return testArr;
}

//const testArr =randNumber(6);
const testArr = [7,6,5,4,3,2,1,0];

console.log("before", testArr.toString());

mergeSort(testArr)

//console.log("after:", testArr.toString())

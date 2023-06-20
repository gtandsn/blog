    function swap(arr, a, b) {
      const temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }

    function randNumber(count) {

      let testArr = [];
      for (let i = 0; i < count; i++) {
        testArr.push(Math.floor(Math.random() * 100));
      }
      return testArr;
    }

    function selSort() {
      //https://visualgo.net/zh/sorting
      //记录最小值的索引

      let testArr = randNumber(10);
      console.log("before:", testArr.toString());
      for (let i = 0; i < testArr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < testArr.length; j++) {
          if (testArr[j] < testArr[minIndex]) {
            minIndex = j;
          }
        }
        minIndex !== i && swap(testArr, i, minIndex);
      }
      console.log("after", testArr.toString());
    }
    selSort();

const testArr = [1, 4, 87, 32, 6, 300];
const val = 15;
const returnArrWithNumsOverVal = (arr, val) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > val) {
      newArr.push(num);
    }
  }
  return newArr;
};
let result = returnArrWithNumsOverVal(testArr, val);
console.log(result);
result = returnArrWithNumsOverVal([3, 65, 32, 8, 5], 10);
console.log(result);

const getMinVal = (arr) => {
    let minValue = 1000000;
    for(let i = 0; i < arr.length; i++){
      const num = arr[i]
      if(num < minValue){
        minValue = num
      }
    }
    return minValue
  }
  result = getMinVal(testArr)
  console.log(result)
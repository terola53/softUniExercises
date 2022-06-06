function addAndSubtract(input) {
  let newArr = [];
  let originalArrSum = 0;
  let newArrSum = 0;

  let inputL = input.length;

  for (let i = 0; i < inputL; i++) {
    originalArrSum += input[i];
    if (input[i] % 2 == 0) {
      let tempNum = input[i] + i;
      newArrSum += tempNum;
      newArr.push(tempNum);
    } else {
      let tempNum = input[i] - i;
      newArrSum += tempNum;
      newArr.push(tempNum);
    }
  }
  console.log(newArr);
  console.log(originalArrSum);
  console.log(newArrSum);
}
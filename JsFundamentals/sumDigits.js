function sumDigits(num) {
  let numString = String(num);
  let numL = numString.length;
  let sum = 0;
  for (let i = 0; i < numL; i++) {
    sum += Number(numString[i]);
  }
  console.log(sum);
}
sumDigits(97561);

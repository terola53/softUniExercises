// function solve(arr, bombNumber) {
//     let index = arr.indexOf(bombNumber[0]);
//     let bombPower = bombNumber[1];

//     arr.splice(index - bombPower, bombPower);
//     let index1 = arr.indexOf(bombNumber[0]);
//     arr.splice(index1, bombPower + 1)

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     console.log(sum);
// }
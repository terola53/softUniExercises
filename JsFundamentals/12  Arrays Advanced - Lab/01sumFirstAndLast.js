function sumFirstAndLast(arr) {
    let cpArr = arr.slice();
    let firstElement = Number(cpArr.shift());
    let lastElement = Number(cpArr.pop());
    console.log(firstElement + lastElement);
    console.log(arr);
    console.log(cpArr);
}
sumFirstAndLast(['20', '30', '40']);
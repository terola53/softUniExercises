function sortNumbers(num1, num2, num3) {
    let arrNum = [num1, num2, num3];
    let ordered = arrNum.sort(function (a, b) {
        return b - a;
    });
    console.log(ordered.join('\n'));
}
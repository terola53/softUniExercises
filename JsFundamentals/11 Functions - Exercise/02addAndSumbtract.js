//idk at this point... I was asked to make it with 2 functions
function sum(num1, num2, num3) {
    let sum = num1 + num2;
    function subtract(sum) {
        console.log(sum - num3);
    }
    subtract(sum);
}
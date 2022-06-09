function simpleCalculator(numOne, numTwo, operator) {
    let res;

    switch (operator) {
        case 'add': res = numOne + numTwo; break;
        case 'subtract': res = numOne - numTwo; break;
        case 'multiply': res = numOne * numTwo; break;
        case 'divide': res = numOne / numTwo; break;
    }
    console.log(res);
}
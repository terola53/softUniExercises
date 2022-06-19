function processOddNumbers(arr) {
    let filteredElements = arr.filter((el, i) => i % 2 === 1);
    console.log(filteredElements.reverse());
}
processOddNumbers([10, 15, 20, 25]);
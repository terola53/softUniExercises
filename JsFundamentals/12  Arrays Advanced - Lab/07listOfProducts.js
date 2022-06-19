function listOfProducts(arr) {
    console.log(arr.sort()
        .map((el, i) => `${i + 1}.${el}`)
        .join('\n'));
        
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
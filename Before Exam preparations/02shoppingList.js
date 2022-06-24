function shoppingList(inputArr) {
    let productList = inputArr.shift().split('!');

    for (let i = 0; i < inputArr.length; i++) {
        let currentCommand = inputArr[i].split(' ');

        switch (currentCommand[0]) {
            case 'Urgent':
                if (!productList.includes(currentCommand[1])) {
                    productList.unshift(currentCommand[1]);
                }
                break;
            case 'Unnecessary':
                if (productList.includes[currentCommand[1]]) {
                    let index = productList.indexOf(currentCommand[1]);

                    productList.splice(index, 1);
                }
                break;
            case 'Correct':
                if (productList.includes(currentCommand[1])) {
                    let index = productList.indexOf(currentCommand[1]);

                    productList.splice(index, 1, currentCommand[2]);
                }
                break;
            case 'Rearrange':
                if (productList.includes(currentCommand[1])) {
                    let index = productList.indexOf(currentCommand[1]);

                    productList.splice(index, 1);
                    productList.push(currentCommand[1]);
                }
                break;
        }
    }
    console.log(productList.join(', '));


}
shoppingList(["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
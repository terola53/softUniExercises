function arrayManipulations(inputArr) {

    let arr = inputArr.shift().split(' ').map(Number);

    for (let i = 0; i < inputArr.length; i++) {
        let currentValues = inputArr[i].split(' ');
        let currentCommand = currentValues.shift();

        switch (currentCommand) {
            case 'Add':
                arr.push(Number(currentValues[0]));
                break;
            case 'Remove':
                let elementToRemove = currentValues[0];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == elementToRemove) {
                        arr.splice(i, 1);
                    }
                }
                break;
            case 'RemoveAt':
                arr.splice(currentValues, 1);
                break;
            case 'Insert':
                arr.splice(currentValues[1], 0, Number(currentValues[0]));
        }
    }
    console.log(arr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
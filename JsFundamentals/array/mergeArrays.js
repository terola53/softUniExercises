function mergeArrays(arr1, arr2) {
    let finalArr = [];
    let arr1L = arr1.length;
    for (let i = 0; i < arr1L; i++) {
        if (i % 2 == 0) {
            finalArr.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            finalArr.push(arr1[i] + arr2[i]);
        }
    }
    console.log(finalArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
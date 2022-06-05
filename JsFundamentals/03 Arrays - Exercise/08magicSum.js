function magicSum(arr, num) {
    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {
        for (let j = i + 1; j < inputL; j++) {
            if (arr[i] + arr[j] === num) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
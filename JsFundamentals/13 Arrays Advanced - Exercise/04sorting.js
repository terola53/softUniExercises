function solve(inputArr) {
    let sortedArr = [...inputArr.sort((n, k) => n - k)];
    let newArr = [];
    let flip = true;

    for (let i of inputArr) {
        let temp = flip
            ? sortedArr.pop()
            : sortedArr.shift()
        newArr.push(temp)
        flip = !flip;
    }

    console.log(newArr.join(' '));
}
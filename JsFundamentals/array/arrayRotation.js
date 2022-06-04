function arrayRotation(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let firstIndex = arr.shift();
        arr.push(firstIndex);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
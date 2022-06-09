function rightPlace(string, char, toCompare) {
    let result = string.replace('_', char);
    let output = result === toCompare ? 'Matched' : 'Not Matched';
    console.log(output);
}
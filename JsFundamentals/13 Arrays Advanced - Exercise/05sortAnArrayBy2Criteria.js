function solve(inputArr) {
    console.log(inputArr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).join('\n'));
}
function printAndSum(start, end) {
    let sum = 0;
    let final = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        final += (i + ' ');
    }
    console.log(final);
    console.log(`Sum: ${sum}`);
}
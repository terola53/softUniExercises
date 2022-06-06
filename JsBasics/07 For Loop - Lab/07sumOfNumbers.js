function solve(input) {
    let number = '' + input[0];
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        let n = Number(number.charAt(i));
        sum += n;
    }
    console.log(`The sum of the digits is:${sum}`);
}


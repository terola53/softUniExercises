function solve(input) {
    let fromNum = Number(input[0]);
    let toNum = Number(input[1]);
    let sum = 0;
    let printNum = '';

    for (let i = fromNum; i <= toNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            printNum += `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(printNum);
}

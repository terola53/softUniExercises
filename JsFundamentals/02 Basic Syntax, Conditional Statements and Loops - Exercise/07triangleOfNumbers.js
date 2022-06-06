function triangleOfNumbers(num) {
    for (let row = 1; row <= num; row++) {
        let printLine = "";

        for (let cow = 1; cow <= row; cow++) {
            printLine += `${row} `;
        }
        console.log(printLine);
    }
}
function demo(n) {
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            sum += i;
            count++;
            console.log(i);
            if (count == n) {
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}
function mathPower(number, power) {
    //console.log(Math.pow(number, power));
    let res = 1;

    for (let i = 0; i < power; i++) {
        res *= number;
    }
    console.log(res);
}
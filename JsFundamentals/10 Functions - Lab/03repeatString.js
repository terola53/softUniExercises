function repeatString(str, n) {
    //console.log(str.repeat(n));
    let res = '';
    for (let i = 0; i < n; i++) {
        res += str;
    }
    console.log(res);
}
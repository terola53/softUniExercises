function solve(arrInput) {
    let resultArr = [];
    arrInput.filter(x => {
        if(!resultArr.includes(x)){
            resultArr.push(x);
        }
    });
    console.log(resultArr.join(' '));
}
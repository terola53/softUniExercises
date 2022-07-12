function convertToObject(inputJSON) {
    let obj = JSON.parse(inputJSON);
    for(let element in obj){
        console.log(`${element}: ${obj[element]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
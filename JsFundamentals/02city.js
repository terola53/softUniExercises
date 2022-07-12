function city(inputObj) {
    for (const element in inputObj) {
        console.log(`${element} -> ${inputObj[element]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
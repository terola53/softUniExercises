function solve(names) {
    let employees = {};

    names.forEach(element => {
        employees[element];
        employees[element] = element.length;
    });

    for (const [key, value] of Object.entries(employees)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

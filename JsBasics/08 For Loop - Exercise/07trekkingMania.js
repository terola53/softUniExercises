function trekkingMania(input) {
    let climbersGroups = Number(input[0]);

    let totalClimbers = 0;

    let climbers1 = 0;
    let climbers2 = 0;
    let climbers3 = 0;
    let climbers4 = 0;
    let climbers5 = 0;

    for (let i = 1; i < input.length; i++) {
        totalClimbers += Number(input[i]);

        if (Number(input[i]) > 0 && Number(input[i] <= 5)) {
            climbers1 += Number(input[i]);
        } else if (Number(input[i]) > 5 && Number(input[i]) <= 12) {
            climbers2 += Number(input[i]);
        } else if (Number(input[i]) > 12 && Number(input[i]) <= 25) {
            climbers3 += Number(input[i]);
        } else if (Number(input[i]) > 25 && Number(input[i]) <= 40) {
            climbers4 += Number(input[i]);
        } else {
            climbers5 += Number(input[i]);
        }
    }
    console.log(`${(climbers1 / totalClimbers * 100).toFixed(2)}%
${(climbers2 / totalClimbers * 100).toFixed(2)}%
${(climbers3 / totalClimbers * 100).toFixed(2)}%
${(climbers4 / totalClimbers * 100).toFixed(2)}%
${(climbers5 / totalClimbers * 100).toFixed(2)}%
    `);

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);
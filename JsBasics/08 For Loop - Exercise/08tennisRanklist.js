function tennisRanklist(input) {
    let tourneysParticipated = Number(input[0]);
    let beginnigPoints = Number(input[1]);
    let wCounter = 0;

    for (let i = 2; i < input.length; i++) {
        switch (input[i]) {
            case 'W':
                beginnigPoints += 2000;
                wCounter++;
                break;
            case 'F':
                beginnigPoints += 1200;
                break;
            case 'SF':
                beginnigPoints += 720;
                break;
        }
    }
    console.log(`Final points: ${beginnigPoints}
Average points: ${Math.floor((beginnigPoints - Number(input[1])) / tourneysParticipated)}
${(wCounter / tourneysParticipated * 100).toFixed(2)}%
`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
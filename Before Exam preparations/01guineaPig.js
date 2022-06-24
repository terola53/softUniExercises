//all input is in kg
function guineaPig(inputArr) {
    let inputInGrams = inputArr.map(x => {
        return Number(x) * 1000;
    });
    // index 0 == food 
    // index 1 == hay
    // index 2 == cover
    // index 3 == weight

    for (let d = 1; d <= 30; d++) {
        inputInGrams[0] -= 300;

        if (d % 2 === 0) {
            inputInGrams[1] -= inputInGrams[0] * 0.05;
        }



        if (d % 3 === 0) {
            inputInGrams[2] -= (inputInGrams[3] / 3);
        }
        
    }

    if (inputInGrams[0] < 0 || inputInGrams[1] < 0 || inputInGrams[2] < 0) {
        console.log(`Merry must go to the pet store!`);
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(inputInGrams[0] / 1000).toFixed(2)}, Hay: ${(inputInGrams[1] / 1000).toFixed(2)}, Cover: ${(inputInGrams[2] / 1000).toFixed(2)}.`);
    }

    // This problem took my soul out :'(
    // I had a grammatical error
}

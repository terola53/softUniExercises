function maxSequenceOfEqualElements(array) {
    let maxSequence = [];
    let inputL = array.length;

    for (let i = 0; i < inputL; i++) {
        let currentSequence = [];

        for (let j = i; j < inputL; j++) {
            if (array[i] === array[j]) {
                currentSequence.push(array[i]);
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
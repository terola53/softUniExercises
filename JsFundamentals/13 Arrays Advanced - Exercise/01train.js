function solve(inputArr) {
    let wagonsPassengers = inputArr.shift().split(' ').map(Number);
    let maxPassengersPerWagon = +inputArr.shift();

    for (let element of inputArr) {
        let command = element.split(' ');

        if (command[0] == 'Add') {
            wagonsPassengers.push(Number(command[1]));
        } else {
            for (let i = 0; i < wagonsPassengers.length; i++) {
                if (Number(command[0]) + wagonsPassengers[i] <= maxPassengersPerWagon) {
                    wagonsPassengers[i] += Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(wagonsPassengers.join(' '));
}
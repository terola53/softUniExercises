function solve(inputArr) {
    let guestList = [];

    for (const element of inputArr) {
        let currentElement = element.split(' ');
        let name = currentElement[0];
        if (currentElement.length == 3) {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if(guestList.includes(name)){
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}
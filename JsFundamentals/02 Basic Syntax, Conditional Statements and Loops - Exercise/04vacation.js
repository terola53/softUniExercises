function vacation(groupNumber, groupType, dayOfWeek) {
    let price = 0;
    if (groupType == "Business" && groupNumber >= 100) {
        groupNumber -= 10;
    }

    switch (groupType) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    price = 8.45 * groupNumber;
                    break;
                case "Saturday":
                    price = 9.8 * groupNumber;
                    break;
                case "Sunday":
                    price = 10.46 * groupNumber;
                    break;
            }
            break;
        case "Business":
            switch (dayOfWeek) {
                case "Friday":
                    price = 10.9 * groupNumber;
                    break;
                case "Saturday":
                    price = 15.6 * groupNumber;
                    break;
                case "Sunday":
                    price = 16 * groupNumber;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    price = 15 * groupNumber;
                    break;
                case "Saturday":
                    price = 20 * groupNumber;
                    break;
                case "Sunday":
                    price = 22.5 * groupNumber;
                    break;
            }
            break;
    }

    if (groupType == 'Students' && groupNumber >= 30) {
        price *= 0.85;
    } else if (groupType == 'Regular' && groupNumber >= 10 && groupNumber <= 20) {
        price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
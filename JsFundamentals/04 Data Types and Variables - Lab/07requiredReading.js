function requiredReading(currentBookPages, pagesReadIn1Hour, daysToReadBook) {
    let totalTimeToReadBook = currentBookPages / pagesReadIn1Hour;
    let requiredHoursPerDay = totalTimeToReadBook / daysToReadBook;

    console.log(requiredHoursPerDay);
}
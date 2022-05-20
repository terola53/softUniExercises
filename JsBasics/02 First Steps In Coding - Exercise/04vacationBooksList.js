function vacationBooksList(input) {
  let pages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let timeToReadBook = Number(input[2]);

  let totalTime = pages / pagesPerHour;
  let hoursPerDay = totalTime / timeToReadBook;
  console.log(hoursPerDay);
}

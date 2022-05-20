function depositCalculator(input) {
  let depositSum = Number(input[0]);
  let month = Number(input[1]);
  let interestPercent = Number(input[2]);

  let total = depositSum + month * ((depositSum * interestPercent) / 100 / 12);

  console.log(total);
}

function cinema(input) {
  let projection = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);

  let income = 0;

  switch (projection) {
    case "Premiere":
      income = r * c * 12;
      break;
    case "Normal":
      income = r * c * 7.5;
      break;
    case "Discount":
      income = r * c * 5;
      break;
  }
  console.log(income.toFixed(2) + " leva");
}

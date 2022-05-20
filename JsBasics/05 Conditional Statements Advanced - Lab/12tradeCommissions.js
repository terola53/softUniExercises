function tradeCommissions(input) {
  let city = input[0];
  let salesVolume = Number(input[1]);

  let sum = 0;

  switch (city) {
    case "Sofia":
      if (salesVolume >= 0 && salesVolume <= 500) {
        sum = salesVolume * 0.05;
      } else if (salesVolume > 500 && salesVolume <= 1000) {
        sum = salesVolume * 0.07;
      } else if (salesVolume > 1000 && salesVolume <= 10000) {
        sum = salesVolume * 0.08;
      } else if (salesVolume > 10000) {
        sum = salesVolume * 0.12;
      } else {
        sum = "error";
      }
      break;
    case "Varna":
      if (salesVolume >= 0 && salesVolume <= 500) {
        sum = salesVolume * 0.045;
      } else if (salesVolume > 500 && salesVolume <= 1000) {
        sum = salesVolume * 0.075;
      } else if (salesVolume > 1000 && salesVolume <= 10000) {
        sum = salesVolume * 0.1;
      } else if (salesVolume > 10000) {
        sum = salesVolume * 0.13;
      } else {
        sum = "error";
      }
      break;
    case "Plovdiv":
      if (salesVolume >= 0 && salesVolume <= 500) {
        sum = salesVolume * 0.055;
      } else if (salesVolume > 500 && salesVolume <= 1000) {
        sum = salesVolume * 0.08;
      } else if (salesVolume > 1000 && salesVolume <= 10000) {
        sum = salesVolume * 0.12;
      } else if (salesVolume > 10000) {
        sum = salesVolume * 0.145;
      } else {
        sum = "error";
      }
      break;
    default:
      sum = "error";
      break;
  }
  if (sum === "error") {
    console.log("error");
  } else {
    console.log(sum.toFixed(2));
  }
}

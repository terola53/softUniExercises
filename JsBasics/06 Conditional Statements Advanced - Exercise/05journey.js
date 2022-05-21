function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let price = 0;
  let location;
  let vacationType;

  if (budget <= 100) {
    location = "Bulgaria";
    switch (season) {
      case "winter":
        price = budget * 0.7;
        vacationType = "Hotel";
        break;
      case "summer":
        price = budget * 0.3;
        vacationType = "Camp";
        break;
    }
  } else if (budget <= 1000) {
    location = "Balkans";
    switch (season) {
      case "winter":
        price = budget * 0.8;
        vacationType = "Hotel";
        break;
      case "summer":
        price = budget * 0.4;
        vacationType = "Camp";
        break;
    }
  } else if (budget > 1000) {
    vacationType = "Hotel";
    location = "Europe";
    price = budget * 0.9;
  }

  console.log(`Somewhere in ${location}`);
  console.log(`${vacationType} - ${price.toFixed(2)}`);
}

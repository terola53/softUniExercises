function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let numberFishers = Number(input[2]);

  let rent = 0;

  switch (season) {
    case "Spring":
      rent += 3000;
      if (numberFishers <= 6) {
        rent *= 0.9;
      } else if (numberFishers > 6 && numberFishers <= 11) {
        rent *= 0.85;
      } else if (numberFishers > 11) {
        rent *= 0.75;
      }
      break;

    case "Summer":
      rent += 4200;
      if (numberFishers <= 6) {
        rent *= 0.9;
      } else if (numberFishers > 6 && numberFishers <= 11) {
        rent *= 0.85;
      } else if (numberFishers > 11) {
        rent *= 0.75;
      }
      break;

    case "Autumn":
      rent += 4200;
      if (numberFishers <= 6) {
        rent *= 0.9;
      } else if (numberFishers > 6 && numberFishers <= 11) {
        rent *= 0.85;
      } else if (numberFishers > 11) {
        rent *= 0.75;
      }
      break;

    case "Winter":
      rent += 2600;
      if (numberFishers <= 6) {
        rent *= 0.9;
      } else if (numberFishers > 6 && numberFishers <= 11) {
        rent *= 0.85;
      } else if (numberFishers > 11) {
        rent *= 0.75;
      }
      break;
  }
  if (numberFishers % 2 === 0 && season !== "Autumn") {
    rent *= 0.95;
  }

  if (budget >= rent) {
    console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(rent - budget).toFixed(2)} leva.`
    );
  }
}

function newHouse(input) {
  let flowerType = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  switch (flowerType) {
    case "Roses":
      price = quantity * 5;
      if (quantity > 80) {
        price *= 0.9;
      }
      break;

    case "Dahlias":
      price = quantity * 3.8;
      if (quantity > 90) {
        price *= 0.85;
      }
      break;
    case "Tulips":
      price = quantity * 2.8;
      if (quantity > 80) {
        price *= 0.85;
      }
      break;
    case "Narcissus":
      price = quantity * 3;
      if (quantity < 120) {
        price *= 1.15;
      }
      break;
    case "Gladiolus":
      price = quantity * 2.5;
      if (quantity < 80) {
        price *= 1.2;
      }
      break;
  }

  if (budget - price >= 0) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${flowerType} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}

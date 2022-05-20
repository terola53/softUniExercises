function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let mininsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let moneyFromPuzzles = puzzleCount * 2.6;
  let moneyFromDolls = dollsCount * 3;
  let moneyFromBears = bearsCount * 4.1;
  let moneyFromMinions = mininsCount * 8.2;
  let moneyFromTrucks = trucksCount * 2;

  let moneyFromAllToys =
    moneyFromPuzzles +
    moneyFromDolls +
    moneyFromBears +
    moneyFromMinions +
    moneyFromTrucks;

  let allToysCount =
    puzzleCount + dollsCount + bearsCount + mininsCount + trucksCount;

  if (allToysCount >= 50) {
    moneyFromAllToys *= 0.75;
  }

  let moneyAfterRent = moneyFromAllToys * 0.9;

  if (moneyAfterRent >= tripPrice) {
    console.log(`Yes! ${(moneyAfterRent - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - moneyAfterRent).toFixed(2)} lv needed.`
    );
  }
}

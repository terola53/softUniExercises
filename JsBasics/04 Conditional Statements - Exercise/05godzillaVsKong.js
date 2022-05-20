function godzilaVsKong(input) {
  let budget = Number(input[0]);
  let statists = Number(input[1]);
  let outfitPrice = Number(input[2]);

  let priceDecor = budget * 0.1;
  let totalOutfitPrice = statists * outfitPrice;

  if (statists > 150) {
    totalOutfitPrice *= 0.9;
  }

  let moviePrice = priceDecor + totalOutfitPrice;

  if (budget >= moviePrice) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - moviePrice).toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(moviePrice - budget).toFixed(2)} leva more.`);
  }
}

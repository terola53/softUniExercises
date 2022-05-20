function shopping(input) {
  let budget = Number(input[0]);
  let GPU = Number(input[1]);
  let CPU = Number(input[2]);
  let RAM = Number(input[3]);

  let GPUPrice = GPU * 250;
  let CPUPrice = CPU * (GPUPrice * 0.35);
  let RAMPrice = RAM * (GPUPrice * 0.1);

  let totalSum = GPUPrice + CPUPrice + RAMPrice;

  if (GPU > CPU) {
    totalSum *= 0.85;
  }

  if (budget >= totalSum) {
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`
    );
  }
}

function repainting(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hours = Number(input[3]);

  let nylonPrice = (nylon + 2) * 1.5;
  let paintPrice = (paint * 0.1 + paint) * 14.5;
  let thinnerPrice = thinner * 5;

  let finalSum = nylonPrice + paintPrice + thinnerPrice + 0.4;
  let workerSum = finalSum * 0.3 * hours;

  let totalSum = finalSum + workerSum;

  console.log(totalSum);
}

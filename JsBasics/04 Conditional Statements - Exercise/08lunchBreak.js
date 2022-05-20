function solve(input) {
  let seriesName = input[0];
  let epLength = Number(input[1]);
  let restTime = Number(input[2]);

  let lunchTime = restTime / 8;
  let rest = restTime / 4;
  let leftTime = restTime - lunchTime - rest;

  if (leftTime >= epLength) {
    console.log(
      `You have enough time to watch ${seriesName} and left with ${Math.ceil(
        leftTime - epLength
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${seriesName}, you need ${Math.ceil(
        epLength - leftTime
      )} more minutes.`
    );
  }
}

function worldSwimmingRecord(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSeconds = Number(input[2]);

  let totalSecs = distanceInMeters * timeInSeconds;
  let delay = Math.floor(distanceInMeters / 15) * 12.5;

  let finalTime = totalSecs + delay;

  if (finalTime < recordInSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${finalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(finalTime - recordInSeconds).toFixed(
        2
      )} seconds slower.`
    );
  }
}

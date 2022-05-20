function sumSeconds(input) {
  let timeFirst = Number(input[0]);
  let timeSecopnd = Number(input[1]);
  let timeThird = Number(input[2]);

  let totalTime = timeFirst + timeSecopnd + timeThird;

  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

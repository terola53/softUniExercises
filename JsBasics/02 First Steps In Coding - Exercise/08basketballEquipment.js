function basketballEquipment(input) {
  let tax = Number(input[0]);

  let shoes = tax * 0.6;
  let outfit = shoes * 0.8;
  let ball = outfit / 4;
  let more = ball / 5;

  let total = tax + shoes + outfit + ball + more;

  console.log(total);
}

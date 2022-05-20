function yardGreening(input) {
  let plosht = input[0];

  let cena = plosht * 7.61;
  let discount = 0.18 * cena;
  let krainaCena = cena - discount;

  console.log(`The final price is: ${krainaCena} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

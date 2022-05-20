function schoolSuplies(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let cleaner = Number(input[2]);
  let discount = Number(input[3]);

  let pensPrice = pens * 5.8;
  let markersPrice = markers * 7.2;
  let cleanerPrice = cleaner * 1.2;
  let totalPrice = pensPrice + markersPrice + cleanerPrice;

  let discountedPrice = totalPrice - (totalPrice * discount) / 100;
  console.log(discountedPrice);
}

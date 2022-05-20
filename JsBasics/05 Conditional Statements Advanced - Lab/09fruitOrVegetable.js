function fruitOrVegetable(input) {
  let product = input[0];
  let productType;

  switch (product) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      productType = "fruit";
      break;

    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      productType = "vegetable";
      break;

    default:
      productType = "unknown";
      break;
  }
  console.log(productType);
}

function petShop(input){
    let hranaKucheta = input[0];
    let hranaKotki = input[1];
    let cenaKucheta = 2.5;
    let cenaKotki = 4;
    let krainaCena = (cenaKucheta * hranaKucheta) + (cenaKotki * hranaKotki);

    console.log(`${krainaCena} lv.`);
}

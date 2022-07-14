function solve(towns) {
    let currentTown = {};

    towns.forEach(element => {
        let [townName, townLatitude, townLongitude] = element.split(' | ');
        currentTown.town = townName;
        currentTown.latitude = Number(townLatitude).toFixed(2);
        currentTown.longitude = Number(townLongitude).toFixed(2);
        console.log(currentTown);
    });
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

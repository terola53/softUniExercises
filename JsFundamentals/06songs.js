function songs(inputArr) {
    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];

    let songsNumber = inputArr.shift();
    let songType = inputArr.pop();

    for (let i = 0; i < inputArr.length; i++) {
        let [type, name, time] = inputArr[i].split('_');

        songs.push(new Songs(type, name, time));
    }

    if (songType === 'all') {
        songs.forEach((i) => {
            console.log(i.name);
        });
    } else {
        let filtered = songs.filter(i => i.type === songType);
        filtered.forEach((i) => console.log(i.name));
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
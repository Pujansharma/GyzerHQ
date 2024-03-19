function findSpareChairs(rooms, need) {
    let spareChairs = [];
    for (let i = 0; i < rooms.length; i++) {
        let occupants = rooms[i][0];
        let chairs = rooms[i][1];
        let availableChairs = chairs - occupants.length;
        if (availableChairs >= need) {
            spareChairs.push(Math.min(need, availableChairs));
            return spareChairs;
        } else {
            spareChairs.push(availableChairs);
            need -= availableChairs;
        }
    }
    return need > 0 ? 0 : spareChairs;
}

// Example usage:
let rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
let need = 4;
console.log(findSpareChairs(rooms, need)); // Output: [0, 1, 3]

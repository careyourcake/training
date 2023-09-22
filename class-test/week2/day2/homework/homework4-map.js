let arr = [-1, 0, '0', 1, '2', 2, 2, 3, 3, 3, 4, 4, 4, 4, '5'];

let map = new Map();
for (let item of arr) {
    if (map.has(item)) {
        map.set(item, map.get(item) + 1);
    } else {
        map.set(item, 1);
    }
}
console.log(map);
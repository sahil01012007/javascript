const marvel_heroes = ["thor", "ironman"]
const dc_heroes = ["superman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // xxxx

// let all_heroes = marvel_heroes.concat(dc_heroes) // xxxx
// console.log(all_heroes);

const heroes = [...marvel_heroes, ...dc_heroes]
// console.log(heroes);

const anotherArray = [1,2,[3,4,[5,6]],7,8]
// console.log(anotherArray.flat(2));



console.log(Array.isArray("sahil"));
console.log(Array.from("sahil"));
console.log(Array.from({name: "sahil"})); // interesting result will be empty array..because we have to tell javascript that what we have to convert whether its key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

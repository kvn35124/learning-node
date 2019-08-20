let path = require('path');
let fs = require('fs');
let rp = require('request-promise');

// console.log(__dirname);

let dataPath = path.join(__dirname, '../chirps.json');

console.log(dataPath);


const chirperObjects = [{
    name: "Kevin",
    chirp: "Chirp one"
},
{
    name: "David",
    chirp: "Chirp two"
},
{
    name: "Drew",
    "chirp": "Chirp three"
},
{
    name: "Brittney",
    chirp: "Chirp four"
},
{
    name: "Trent",
    Chirp: "Chirp five"
}];

fs.writeFile(dataPath, JSON.stringify(chirperObjects), (err) => {
    if (err) console.log(err);
})

fs.readFile(dataPath, (err, data) => {
    if (err)  console.log(err);

    const chirps = JSON.parse(data);

    console.log(chirps);
});




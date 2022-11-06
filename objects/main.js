// Objects
// key value
// value string , number , boolean , array, object , undefined, null
let daraObj = {
    name: "Dara",
    surname: "Minina",
    dateOfBirth: '22.03.2003',
    married: "single",
    childrens: [],
    pets: [
        {
            type: "cat",
            name: "kity"
        },
        {
            type: "rat",
            name: "husky"
        }
    ]
};
// []
console.log(daraObj["name"]);

for (const item of daraObj["pets"]) {
    console.log(item['name']);
}

// BAZADANIX
// ZAPROSIL DARA
console.log(daraObj["married"]);

daraObj['married'] = "married";

// SOXRANILA V BAZU DANNIX
console.log(daraObj["married"]);


daraObj['pets'].push({
    type: "dog",
    name: "maximus"
});

console.log(daraObj);

// let hardDisk = Object.assign({}, daraObj);
let hardDisk = {...daraObj};

console.log(hardDisk);

// SLOZNAJA CHASTJ IS OBJECT
// console.log(daraObj['name']);
// daraObj['name'] = "DaraDara";
// console.log(daraObj['name']);
// console.log(hardDisk['name']); 

let hardDiskFromBadHacker = daraObj;
daraObj["name"] = "DaraDara";
console.log(hardDiskFromBadHacker['name']);

// for (const [key, value] of Object.entries(daraObj)) {
//     if(key == 'password') {
//         tryDecrypt(value);
//         tryLoginToSite();
//     } 
//   }
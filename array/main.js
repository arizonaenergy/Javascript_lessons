// METHODS
let str = "";
let str1 = '';

let value = "some string value"

let str2 = `${value}`; //${}

let testStr = "some";
let testStr2 = "string";

// testStr = string , concat = method 
// method == function
// return 
let testStr3 =  testStr.concat(" ",testStr2);
console.log(testStr3);



// ARRAY , Collection List
let arr = new Array(); // Tak nikto ne delajet
let arr2 = [];

// method push
// add to array
arr2.push("string 1");
arr2.push("string 2");
arr2.push("string 3");

// delete form array 
arr2.pop();

let classMates = ["Andrejs", "Dara", "Diana", "KOKOS", "BU"  ];

// console.log(classMates);
// OBRAZENJIJE V MASSIVE
// console.log(classMates[3]);

// classMates.forEach((item, i) => {
//     console.log(item, i);
//     if(item == "Dara") {
//         alert(`${item} Samaja klasnaja`)
//     }
// })

// for(let i = 0; i < classMates.length; i++ ) {  
// }

// for (const element of classMates) {
//     console.log(element);
// }

let arrForConcat = ["Andrejs", "Dara"];
let arrForConcat2 = ["KOKOS", "BU"];

let arrForConcat3 = arrForConcat.concat(arrForConcat2);
console.log(arrForConcat3);

let arrForConcat4 = [...arrForConcat, ...arrForConcat2];
console.log(arrForConcat4);


// FIND INDEX
let index = arrForConcat4.findIndex((item) => item === "KOKOS");
console.log(index);

// How to delete 
let newArr = arrForConcat4.filter((item, i) => {
    return i !== index;
});
console.log(newArr);


let newTestArray = [1,2,3,4,5];

let arrr = newTestArray.map((item, i) => {
    item = item + 1;
    return item;
});
let arrr2 = newTestArray.map((item, i) => item + 1);

console.log(arrr);
console.log(arrr2);


console.log(newArr.includes("Dara"));
console.log(newArr.includes("KOKOS"));
if(newArr.includes("Dara")) {
    // Something implement
}
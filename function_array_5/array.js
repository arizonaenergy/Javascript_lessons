let arr = ["Andrej", "Dara", "Igorj", "J"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// Dlina massiva
console.log(arr.length);

arr.push("Sofija");
console.log(arr);
arr.pop();
console.log(arr);

// let nameDara;
for (let i = 0; i < arr.length; i++) {
  //arr[] i
  // i = cifra
  console.log(i);
  // if(arr[i] == "Dara"){
  //     nameDara = arr[i];
  // }
  console.log(arr[i]);
}

for (let name of arr) {
  // alert( fruit );
  console.log(name);
}

//   console.log(nameDara);
console.log(arr);
// console.log()
// return
arr = arr.splice(0, 1);
console.log(arr);

let arr2 = [1, 2, 3, 4, 5];

let newarr = arr.concat(arr2);
let newarr2 = [...arr, ...arr2]; // spread operation

console.log(newarr);

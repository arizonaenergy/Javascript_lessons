// types
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // can push all types

// Loop
console.log(arr[2]);
for (let i = 0; i < arr.length; i++) {
  // break;
  // continue;
  console.log(arr[i]);
  console.log(i);
  console.log(typeof i);
}

arr.forEach((item, index) => {
  //  break
  //  continue
  console.log(item);
  console.log(index);
  console.log(typeof index);
});

for (const iterator of arr) {
  console.log(iterator);
  //   console.log(arr[iterator])
}

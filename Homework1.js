/*
    @Create function which add to array string;
    function can get only string arguments 
*/

/*
    @Create function which remove from arr start position end positon
    armune start end
    remove from array 

    esli v massive cto to jestj
*/

/* 
    Create 3 function which loop massive 3 ways

*/

/* 
 * MISSION
Poprobovatj method massiva filter
*/
let arr = [
  "Dara",
  "Igorj",
  "Vodka",
  "Belka",
  "Andrej",
  "Julija",
  "Hello",
  "World",
];

function myfunction(Dmitrij) {
  if (typeof Dmitrij !== "string") {
    return "error";
  }
  arr.push(Dmitrij);
}
function stupidfunction(start, end) {
  if (arr.length == 0) return;

  arr = arr.splice(start, end);
}
let i = 1;
let dog = "pitbull";
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (i == 3) break;
  console.log(arr[i]);
}

for (let score of arr) {
  console.log(score);
}

arr.forEach((score) => {
  console.log(score);
});

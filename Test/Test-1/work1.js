// 1- Write the javascript function
// 2- which get 2 parameters number if one of params is not number please thrown exception
// 3- Implement logic first params + second params = sum
// if sum < 100 return "{sum} is lower then 100"
// if sum > 100 return "{sum} is higher then 100"
// if sum == 100 return "{sum} is equal == 100"
let summ1 = 20;
let summ2 = 68;

function someFunction(a, b) {
  let sum = a + b;
  if (sum < 100) {
    return "{sum} is lower then 100";
  } else if (sum > 100) {
    return "{sum} is higher then 100";
  } else {
    return "[sum}is equal ==100";
  }
}

console.log(someFunction(20, 100));
console.log(someFunction(20, 20));
console.log(someFunction(50, 50));

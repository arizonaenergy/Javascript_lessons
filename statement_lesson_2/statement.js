let num = 0;
// 0 == false;
if (num) {
  console.log("pivozavr");
}
// ESLI num == false; return true;
if (!num) {
  console.log("pivozavr");
}
let num1 = 1;
if (num1) {
  console.log("pivozavr");
}

let str = "";
// str === '' = false;
if (str) {
  console.log("pivozavr");
}
let str1 = "Andrejs";
if (str1) {
  console.log("pivozavr");
}

let str2 = "str2";

if (typeof str2 == "string") {
  console.log("pivozavr");
}

if (typeof str2 == "string") {
  // code block 1
} else if (typeof str2 == "number") {
  // code block 2
} else if (typeof str2 == "") {
  // code block 2
} else if (condition2) {
  // code block 2
} else if (condition2) {
  // code block 2
} else {
  // code block 3
}

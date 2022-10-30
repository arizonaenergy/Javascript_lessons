// if else
// false
// if(statement){}
//  ZAPISALI V BAZU INTERENRE
// ----------

let a = "Dara";

// VSEGDA ZAJDET V IF ESLI TRUE

// NE ZAJDET ESLI FALSE
// ''
// 0
// undefined
// null

if (a) {
  console.log("some string");
  greeting(a);
} else {
  greeting("Guest");
}

// ---------------------

if (a == "Dara") {
  console.log("some string");
  greeting("Super ultra " + a);
} else if (a) {
  greeting(a);
} else {
  greeting("Guest");
}

let someFalse = false;
// IF FALSE TO TRUE
// KOROTRKO NAM NUZNO VIPOLNITJ ETOT FALSE
if (!someFalse) {
  console.log("SOME FUNCTION");
}

function greeting(name) {
  console.log("Hello" + name);
}

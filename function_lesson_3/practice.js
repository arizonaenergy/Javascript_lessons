// Sozdatj functionciju
// kotoraja prinemajet 3 argumenta
// Imja Familija Vozrast
// vozrast < 18 let
//vovrawatj owibku
function agevalidater(name, surname, age) {
  if (test(age)) {
    return "error";
  }
  return name + surname;
}

function test(age) {
  return age < 18;
}

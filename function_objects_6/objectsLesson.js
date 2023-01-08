// Object init
let obj = {};

//key = value;
//key peremenja value tip
let obj1 = {
  name: "Dara",
  surname: "Minina",
  age: 18,
  arr: [{}, {}, {}],
  //   func: () => {
  //     return;
  //   },
  //   func2: (params, params1) => {},
};

console.log(obj1.name);

let fullname = obj1.name + obj1.surname;

// перебор значений
for (const property in obj1) {
  //console.log(`${obj1[property]}`);
}

// Copirovanije objectov
// tak delaatj
obj = { ...obj1 };

//tak ne delatj
//  obj1 = obj;

// obj1 == reference = x1x09382534757
// obj = x1x09382534757;

// obj1 = x1ejfgkehrfgkgkejrb
//
// Obj1
//
obj1.someFunc = function (name) {
  console.log(this);
  console.log("Привет! " + name + " " + this.surname);
};

obj1.someFunc("Dara");
// obj1.someFunc("");

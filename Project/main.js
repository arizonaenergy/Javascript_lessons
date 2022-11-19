let depositEl = document.querySelector("#deposit");
// let firstInput = document.querySelector("#firstinput");
// let secondInput = document.querySelector("#secondinput");
let button = document.querySelector("#buttonid");
let array = [];
depositEl.innerHTML = "1000";
function stupidFunction(firstInput, secondInput) {
  array.push({ for: firstInput, price: secondInput });
  console.log(array);
}
// button = HTML EL
// addEventListener = funciton

// ETO FUNKCIJA PRINIMAJET 2 PARAMETRA
// () => {} = funccija
button.addEventListener("click", (e) => {
  e.preventDefault();
  let firstInput = document.querySelector("#firstinput").value;
  let secondInput = document.querySelector("#secondinput").value;
  stupidFunction(firstInput, secondInput);

  // depositEl = <span id="deposit">1000</span>
  //   depositEl.innerText  = 1000
  // depositEl.innerText 1000 - secondInput = {lubaja suma}
  //   text * 1 = number
  depositEl.innerText = depositEl.innerText * 1 - secondInput * 1;
});

// NAVERHU SOZDATJ MASSIV let {name} = [];
// FUNCTION function {name}({params name}){}
// FUNKCIJA DOLZNA V NAW MASSIV PUSH {name}.push({for: firstInput, price: secondInput})

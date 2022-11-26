let depositEl = document.querySelector("#deposit");
let rightblock1 = document.querySelector("#rightblock1");
// let firstInput = document.querySelector("#firstinput");
// let secondInput = document.querySelector("#secondinput");
let button = document.querySelector("#buttonid");
let button1 = document.querySelector("#buttonid1");
let array = [];

const test = `

`;

depositEl.innerHTML = "1000";
function stupidFunction(firstInput, secondInput) {
  array.push({ for: firstInput, price: secondInput });
  console.log(array);
}

function sstupidfunction(firstInput, secondInput, decision, color) {
  rightblock1.insertAdjacentHTML(
    "beforeend",
    `
      <div
      style="
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      "
    >
      <div>${firstInput}</div>
      <div style="color: ${color};"> ${decision} ${secondInput} €</div>
    </div>
  `
  );
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
  sstupidfunction(firstInput, secondInput, "-", "red");
  // depositEl = <span id="deposit">1000</span>
  //   depositEl.innerText  = 1000
  // depositEl.innerText 1000 - secondInput = {lubaja suma}
  //   text * 1 = number
  depositEl.innerText = depositEl.innerText * 1 - secondInput * 1;
});
button1.addEventListener("click", (e) => {
  e.preventDefault();
  let firstInput = document.querySelector("#firstinput1").value;
  let secondInput = document.querySelector("#secondinput1").value;
  stupidFunction(firstInput, secondinput);
  sstupidfunction(firstInput, secondInput, "+", "green");

  depositEl.innerText = depositEl.innerText * 1 + secondInput * 1;
});

// NAVERHU SOZDATJ MASSIV let {name} = [];
// FUNCTION function {name}({params name}){}
// FUNKCIJA DOLZNA V NAW MASSIV PUSH {name}.push({for: firstInput, price: secondInput})

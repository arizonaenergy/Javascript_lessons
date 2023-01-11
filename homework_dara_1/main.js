let button = document.querySelector("#buttonid");
let secondBlock = document.querySelector("#secondid");

let arr = [];

function filterbyid(id) {
  arr = arr.filter((task) => task.id !== id);
}

function myfunction(obj) {
  arr.push(obj);
}

const insertDom = () => {
  arr.forEach((item) => {
    secondBlock.insertAdjacentHTML(
      "beforeend",
      `
            <div class="insecond ">
                <p>${item.value}</p>
                <p id="${item.id}" class="btnPrepend" style="margin-left: 5px">X</p></p>
            </div>
          `
    );
  });
};
button.addEventListener("click", () => {
  let value = document.querySelector("#inputid").value;
  let id = Date.now();

  if (!value) return;
  document.querySelector("#inputid").value = "";

  myfunction({ id, value });

  secondBlock.insertAdjacentHTML(
    "beforeend",
    `
    <div class="insecond ">
        <p>${value}</p>
        <p id="${id}" class="btnPrepend" style="margin-left: 5px">X</p></p>
    </div>
  `
  );
});

document.addEventListener("click", function (e) {
  const target = e.target.closest(".btnPrepend"); // Or any other selector.
  if (target) {
    console.log("Fuck you Andrej Sahnik");
    // Do something with `target`.
    filterbyid(target.id);
  }
});

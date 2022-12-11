let button = document.querySelector("#buttonid");
let button2 = document.querySelector("#buttonid2");
let paragraf = document.querySelector("#paragraf");
button.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(randomNumber);
  if (randomNumber < 10) {
    paragraf.textContent = "YES";
  } else {
    paragraf.background = "NO";
  }
});

button2.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(randomNumber);
  if (randomNumber > 20) {
    paragraf.textContent = "YES";
  } else {
    paragraf.background = "NO";
  }
});

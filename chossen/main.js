let button = document.querySelector("#buttonid");
let paragraf = document.querySelector("#pp");
button.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  console.log(randomNumber);
  if (randomNumber < 5) {
    paragraf.textContent = "YES";
  } else {
    paragraf.textContent = "NO";
  }
});

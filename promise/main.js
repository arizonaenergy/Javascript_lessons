// GET POST PUT DELETE PATCH
let button = document.querySelector("#button");

let ebanijdiv = document.querySelector("#ebanijdiv");
button.addEventListener("click", (e) => {
  e.preventDefault();
  // let value = document.querySelector("#input").value;
  console.log();

  fct(document.querySelector("#input").value);
  document.querySelector("#input").value = "";
});
// GET ZAPORIST
// POST NAPISATJ
// PUT IZMENITJ
// PATCH IZMENITJ CHASTJ

const options = {
  method: "GET",
  url: "https://gogoanime.consumet.org/recent-release",
};
async function stupidanime() {
  //
  let result = await axios.request(options);

  ebanijdiv.insertAdjacentHTML(
    "beforeend",
    `<p>${result.data[15 + 1].animeTitle}</p>`
  );
}

stupidanime();
async function fct(string) {
  if (typeof string == "string") {
    const options = {
      method: "GET",
      url: "https://gogoanime.consumet.org/vidcdn/watch/naruto-episode-1",
    };

    let result = await axios.request(options);

    console.log(result);
  }
}

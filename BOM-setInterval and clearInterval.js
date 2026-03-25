let div = document.querySelector("div");
function decrease() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(set);
  }
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org/#google_vignette",
      "",
      "widht=400px height=400px",
    );
  }
}
let set = setInterval(decrease, 1000); /// كل ثانيه هيفضل ينقص

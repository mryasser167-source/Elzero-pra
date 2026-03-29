let text = document.querySelector(".text");
let submit = document.querySelector(".submit");
let form = document.querySelector(".form");
let taskes = document.querySelector(".container");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  window.localStorage.setItem("task", text.value);

  ///
  let maindiv = document.createElement("div");
  let div = document.createElement("div");
  div.style.cssText =
    "background-color: #ffffff; width: 90%;     padding: 18px; border-radius: 20px;";
  div.textContent = text.value;
  maindiv.appendChild(div);
  maindiv.style.display = "flex";
  maindiv.style.justifyContent = "space-between";
  maindiv.style.marginBottom = "10px";

  taskes.appendChild(maindiv);
  let btn = document.createElement("button");

  btn.textContent = "delete";
  btn.style.cssText =
    "outline: none;border: none; background-color: #ff5c00; color: white; border-radius: 20px; cursor: pointer;     width: 15%; height: 10%;- text-align: center; position: relative; top: 10px; left: 10px; padding: 10px;";
  maindiv.appendChild(btn);
  btn.onclick = function () {
    window.localStorage.removeItem("task");
    maindiv.remove();
  };
});

window.addEventListener("load", function () {
  if (window.localStorage.getItem("task")) {
    text.value = window.localStorage.getItem("task");
  }
}); //هنجت

let input = document.querySelector("input");
input.onblur = function () {
  window.localStorage.setItem("name", input.value);
};
window.addEventListener("load", function () {
  if (window.localStorage.getItem("name")) {
    input.value = window.localStorage.getItem("name");
  }
});

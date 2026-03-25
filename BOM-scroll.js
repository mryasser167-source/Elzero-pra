//  window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// };
//window.scrollX and window.scrollY//دول ارقام
///
let btn = document.createElement("button");
let text1 = document.createTextNode("UP");
btn.appendChild(text1);
document.body.appendChild(btn);
document.body.style.cssText = "    height: 2000px; width: 2000px;";
btn.style.cssText =
  "    position: fixed; top: 320px;right: 20px; display: none; background-color: red; border: navajowhite; color: wheat; border-radius: 50%; padding: 9px;";
window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// let yasser = function () {
//   window.open("https://www.youtube.com/", "_blank", "width=400,height=400,");
// };
// let set = setTimeout(yasser, 2000);

///
//example
///
let pup = function () {
  let doc2 = window.open("", "_blank", "width=800,height=400,left=400");
  let h3 = doc2.document.createElement("h3");
  let p = doc2.document.createElement("p");
  let btn = doc2.document.createElement("button");
  let text1 = doc2.document.createTextNode("Welcome ");
  let text2 = doc2.document.createTextNode("Welcome to yasser brand ");
  let text3 = doc2.document.createTextNode("CLOSE");
  h3.appendChild(text1);
  p.appendChild(text2);
  btn.appendChild(text3);
  h3.style.cssText = "margin: 20% 50%; font-family: system-ui;";
  p.style.cssText = "margin: -18% 45%; width: 170px;";
  btn.style.cssText = "margin: 20% 51%;";
  doc2.document.body.appendChild(h3);
  doc2.document.body.appendChild(p);
  doc2.document.body.appendChild(btn);
  doc2.document.body.style.backgroundColor = "#eee";
  btn.onclick = function () {
    doc2.close();
  };
};

setTimeout(pup, 3000);

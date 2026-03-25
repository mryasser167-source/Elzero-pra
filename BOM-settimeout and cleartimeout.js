function sayhallo(age) {
  console.log(`my name is mohamed his age:${age}`);
}
let set = setTimeout(sayhallo, 3000, 20); // هنا لازم افصل قيمه البراميتر عن اسم الداله

let button = document.createElement("button");
let text = document.createTextNode("close");
button.appendChild(text);
document.body.appendChild(button);
button.onclick = function () {
  clearTimeout(set); // بيوقف الوقت ومش بيطلع الرساله
};

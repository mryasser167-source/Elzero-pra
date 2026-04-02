// Destructuring array
// let array = ["mo", "yaya", "keko", ["sha", "MA", ["men", "ra"]]];
// [, , , [a, , [, b]]] = array;
// console.log(a);
// console.log(b);

///Swap Variables
// let book = "video";
// let video = "book";
// [book, video] = [video, book]; // بدلنا القيم
// console.log(book);
// console.log(video);
//
// console.log(`////////////////`);

// Destructuring Objects
// let user = {
//   thename: "yasser",
//   theage: 21,
//   thecuntry: "egypt",
//   thetitle: "alyasser",
//   skills: {
//     html: "html",
//     css: "css",
//   },
// };

// ({
//   thename: n, //:n لو عاوز تسميه اسم مختصر
//   theage: a,
//   thecuntry: cu,
//   thetitle: ti,
//   skills: { html: h, css },
// } = user);
// console.log(n); //=console.log(thename);
// console.log(a);
// console.log(cu);
// console.log(ti);
// console.log(`MY skill is ${h} and ${css}`);
///////
// console.log(`//////`);

// Destructuring function
// function ya({
//   thename: n, //:n لو عاوز تسميه اسم مختصر
//   theage: a,
//   thecuntry: cu,
//   thetitle: ti,
//   skills: { html: h, css },
// } = user) {
//   console.log(`mu name is ${n}`);
//   console.log(`mu age is ${a}`);
//   console.log(`mu cuntry is ${cu}`);
//   console.log(`mu title is ${ti}`);
// }
// ya();

// console.log(`//////////`);
///
// Destructuring Mixed Content
let user2 = {
  thename: "OSAMA",
  theAge: 39,
  theSkill: ["html", "css", "JS"],
  theAddress: {
    egypt: "santa",
    america: "newyork",
  },
};
({
  thename,
  theAge,
  theSkill: [h, cs, js],
  theAddress: { eg, am },
} = user2);
console.log(`my skill is ${h}`);

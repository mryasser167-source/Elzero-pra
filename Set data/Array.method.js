/*
 Array.from(Iterable, MapFunc, This)
 */

//1//
// console.log(Array.from("1234567", (n) => +n + +n)); //  بتحول الاسترينج دي ل مصفوفه

//2//
// let array = [1, 1, 1, 2, 3, 4, 5, 6, 7];
// let newarray = new Set(array);
// console.log(newarray);
// console.log(Array.from(newarray));
// console.log([...new Set(myArray)]); // Future

//3//
// function ya() {
//   return Array.from(arguments);
// }
// console.log(ya("mo", "ahmed", "yaser", 1, 2, 3));
////////////

/*
Array.copyWithin(Target, Start => Optional, End => Optional)
*/
// let myArray = [10, 20, 30, 40, 50, "A", "B"];
// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]
// console.log(myArray);

/*
 Array.some(CallbackFunc(Element, Index, Array), This Argument)
*/
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;
// let check = nums.some((e) => e > 5);

// let check = nums.some(function (e) {
//   return e > this;
// }, myNumber);
// console.log(check);

// function checkvalue(arr, val) {
//   return arr.some((e) => e === val);
// }
// console.log(checkvalue(nums, 5));
// //
// let range = {
//   min: 10,
//   max: 20,
// };
// let checkrange = nums.some(function (e) {
//   return e >= this.max && e <= this.min;
// }, range);
// console.log(checkrange);

/*
Array.every(CallbackFunc(Element, Index, Array), This Argument)
*/
// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsarr = Object.keys(locations); //['20', '30', '40', '50']
// console.log(locationsarr);
//
// let locationsarr2 = Array.from(locationsarr, (e) => +e); //[20, 30, 40, 50]
// console.log(locationsarr2);
//
// let check = locationsarr2.every(function (e) {
//   return e > this;
// }, mainLocation);
// console.log(check);
//

/*
Spread Syntax And Use Cases
*/
// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });
//
console.log("##############################");
/*
Map And Set Challenge
 */
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
let max = Math.max(...n1); //30
let min = Math.min(...n1); //10
let allnum = [...new Set(n1), ...n2];
let five = max / allnum.length; //5
let two = min / five; //2

console.log((allnum.reduce((a, b) => a + b) - min - five) * two); //210

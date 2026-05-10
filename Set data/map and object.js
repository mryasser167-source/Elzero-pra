///leacture 3// Map Data Type Vs Objec//
// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   10: "String", // اللي هيظهر ويغطي ع اللي فوقه
// };

// console.log(myNewObject[10]);
// console.log("####");

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);
////////////////////////////
// leacture 3- Map Method//
// let map = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);
// console.log(map);
// // map.set(10, "Number");
// // map.set("10", "String");
// console.log(map.get(10));
// console.log(map.get("10"));
// console.log("####");

// console.log(map.has("Name")); //true

// console.log("####");

// console.log(map.size); //3

// console.log(map.delete("Name")); //true and delete

// console.log(map.size); //2

// map.clear();

// console.log(map.size);
////

// leacture 3//=> Map Vs WeakMap
/*
 Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);
//
console.log("#".repeat(20));
//
let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);
// 
